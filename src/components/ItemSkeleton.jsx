import React from 'react'

function ItemSkeleton() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 w-[200px]  mx-auto  ">
    <div className="animate-pulse flex flex-col ">
      <div className="rounded-md bg-slate-400 h-40 w-full"></div>
      <div className="flex-1 space-y-6 pb-2 pt-4">
        {/* <div className="h-2 bg-slate-500 rounded"></div> */}
        <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-500 rounded col-span-1"></div>
            <div className="h-2 bg-slate-500 rounded col-span-2"></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-500 rounded col-span-2"></div>
            <div className="h-2 bg-slate-500 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-500 rounded"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ItemSkeleton