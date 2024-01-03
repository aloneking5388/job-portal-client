import React, { useEffect, useState } from 'react';
import Banner from "../components/Banner"
import Card from '../components/Card';
import Jobs from '../Pages/Jobs'
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const [ selectedCategory, setSelectedCategory ] = useState(null);
  const [ jobs, setJobs ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [query, setQuery ] = useState("");

  const itemsPerPage = 6;

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json").then(res => res.json().then(data => {
      setJobs(data);
      setIsLoading(false);
    }))
  },[])

  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex, endIndex};
  }

  const nextPage = () => {
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
      setCurrentPage(currentPage + 1)
    }
  }

  const prevpage = () => {
      if(currentPage > 1){
        setCurrentPage(currentPage - 1)
      }
  }

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if(query){
      filteredJobs = filteredItems;
    }

    if(selected){
      filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, salaryType, employmentType, experienceLevel, postingData }) => (
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingData >= selected ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      ))
    }

    const {startIndex, endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex)
    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const result = filteredData(jobs, selectedCategory, query);


  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className='bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
      <div className="bg-white p-4 rounded">
        <Sidebar handleChange={handleChange} handleClick={handleClick}/>
      </div>
      <div className="col-span-2 bg-white p-4 rounded-md">
        {
          isLoading ? (<p className='font-medium'>Loding...</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
          <h3 className='text-lg font-bold mb-2'>{result.length} jobs</h3>
          <p>No data found</p>
          </>
        }

        {
          result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button className='hover:underline' disabled={currentPage === 1} onClick={prevpage}>Previous</button>
              <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
              <button className='hover:underline' onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage )}>Next</button>
            </div>
          ) : ""
        }
      </div>
      <div className="bg-white p-4 rounded"><Newsletter /></div>
    </div>
    </div>
  )
}

export default Home