import React from 'react'

const SearchAll = () => {
    const AllSearchData = [
        {
            name:'0001-James, Jones',
            matter:'Matter 223233223'
        },
        {
            name:'0001-James, Jones',
            matter:'Matter 223233223'
        },
        {
            name:'0001-James, Jones',
            matter:'Matter 223233223'
        },
        {
            name:'0001-James, Jones',
            matter:'Matter 223233223'
        },
        {
            name:'0001-James, Jones',
            matter:'Matter 223233223'
        },
        {
            name:'0001-James, Jones',
            matter:'Matter 223233223'
        },
        {
            name:'0001-James, Jones',
            matter:'Matter 223233223'
        },
        {
            name:'0001-James, Jones',
            matter:'Matter 223233223'
        },
        {
            name:'0001-James, Jones',
            matter:'Matter 223233223'
        },
    ]
  return (
    <div className='flex flex-col justify-start items-start w-full overflow-y-scroll max-h-[320px] mt-2' id='search-all'>
        {AllSearchData.map((search,idx)=>{
            return <div className='p-2 bg-white hover:bg-[#F5F5F5] flex flex-col items-start justify-start w-full rounded-[4px]' key={idx}>
                <div className='text-[14px] leading-[18px] font-bold'>{search.name}</div>
                <div className='text-xs font-normal'>{search.matter}</div>
            </div>
        })}
    </div>
  )
}

export default SearchAll
