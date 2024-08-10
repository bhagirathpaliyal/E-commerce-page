import React from 'react'

function ItemSkeleton() {
  return (
    <div class="border border-blue-300 shadow rounded-md p-4 w-[200px]  mx-auto  ">
    <div class="animate-pulse flex flex-col ">
      <div class="rounded-md bg-slate-400 h-40 w-full"></div>
      <div class="flex-1 space-y-6 pb-2 pt-4">
        {/* <div class="h-2 bg-slate-500 rounded"></div> */}
        <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-500 rounded col-span-1"></div>
            <div class="h-2 bg-slate-500 rounded col-span-2"></div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-500 rounded col-span-2"></div>
            <div class="h-2 bg-slate-500 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-500 rounded"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ItemSkeleton