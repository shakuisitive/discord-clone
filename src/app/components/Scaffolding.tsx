

function Scaffolding() {
  return (
    <div className="min-h-screen flex text-white">
        <div className="bg-gray-800 p-4">
            <div className="text-gray-800 rounded-full flex items-center justify-center w-12 h-12 bg-white">SHK</div>        
        </div>
        <div className="flex flex-col bg-gray-700 w-60">
            <div className="h-12 p-4 shadow-md">hello</div>         
            <div className="flex-1 p-4">world</div>   
        </div>
        <div className="bg-gray-600 flex-1">
            <div className="h-12 p-4 shadow-md">hello</div>         
            <div className="flex-1 p-4">world</div>   
        </div>
    </div>
  )
}

export default Scaffolding