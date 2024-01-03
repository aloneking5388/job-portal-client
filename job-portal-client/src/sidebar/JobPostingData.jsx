import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const now = new Date();

    const twentyForHoursAgo = new Date( now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date( now - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date( now - 30 * 24 * 60 * 60 * 1000);

    const twentyFourHoursAgoData = twentyForHoursAgo.toISOString().slice(0, 10);
    const sevenDaysAgoData = sevenDaysAgo.toISOString().slice(0, 10);
    const thirtyDaysAgoData = thirtyDaysAgo.toISOString().slice(0, 10);
    

  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Data of Posting</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio"  name='test' id='test' value="" onChange={handleChange} />
                <span className='checkmark'></span>All
            </label>

            <InputField handleChange={handleChange} value={twentyFourHoursAgoData} title="Last 24 Hours" name="test" />
            <InputField handleChange={handleChange} value={sevenDaysAgoData} title="Last 7 Days" name="test" />
            <InputField handleChange={handleChange} value={thirtyDaysAgoData} title="Last Month" name="test" />
        </div>
    </div>
  )
}

export default JobPostingData