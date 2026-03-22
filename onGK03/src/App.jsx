import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import ComboBox from './components/ComboBox'
import SearchBar from './components/SearchBar'
import TodoList from './components/TodoList'
import { useFetch } from './useFetch'
import inputData from '../data.json'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const inputRef = useRef(null);

  const {data, loading, error} = useFetch(inputData);

  useEffect(()=>{
    if(!loading && inputRef.current){
      inputRef.current.focus();
    }
  },[loading]);

  const handleSearch = useCallback((search) =>{
    setSearchQuery(search);
  },[]);

  const handleChange = useCallback((filter) => {
    setStatusFilter(filter);
  },[]);

  const displayedData = useMemo(() => {
    return data.filter((todo) => {
      const matchesSearch = todo.name?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'All' || todo.status?.toLowerCase() === statusFilter.toLowerCase();
      return matchesSearch && matchesStatus;
    })
  },[data, searchQuery, statusFilter]);

  return(
    <div className='App'>
      <h1>Quản Lý Công Việc</h1>
      <SearchBar onChange={handleSearch} inputRef={inputRef}/>
      <ComboBox onChange={handleChange}/>

      {loading && <p>Đang Tải Dữ Liệu Vui Lòng Đợi</p>}

      {error && <p style={{color:'red'}}>{error}</p>}

      {!loading && !error && (
        <>
          <p>Tìm Thấy: <b>{displayedData.length}</b> Kết Quả</p>
          <TodoList data={displayedData}/>
        </>
      )}

      {!loading && !error && displayedData.length === 0 &&(
        <p>Chưa có công việc nào phù hợp</p>
      )}
    </div>
  )
}

export default App
