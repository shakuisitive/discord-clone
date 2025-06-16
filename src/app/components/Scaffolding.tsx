function Scaffolding() {
  return (
    <div className="h-screen flex text-white">
        <div className="bg-gray-800 p-3 space-y-4 overflow-y-scroll scrollbar-hide">
            {Array.from({length: 40}).map((_, i) => (<div key={i} className="text-gray-800 rounded-full flex items-center justify-center w-12 h-12 bg-white">{i}</div>))}
        </div>
        <div className="flex flex-col bg-gray-700 w-60">
            <div className="h-12 px-3 h-12 flex-shrink-0 flex items-center shadow-md">hello</div>         
            
            <div className="overflow-y-scroll scrollbar-hide p-3 flex-1 space-y-2">
                <p className="text-white">Channel (unread)</p>
                <p className="text-white">Channel (unread)</p>
                {Array.from({length: 40}).map((_, i) => (
                    <p key={i}>world {i}</p>
                ))}   
            </div>

        </div>
        <div className="bg-gray-600 flex-1 flex flex-col">
            <div className="h-12 px-3 flex items-center shadow-md flex-shrink-0">hello</div>         
            <div className="flex-1 p-3 space-y-4 overflow-y-scroll scrollbar-hide">
                {Array.from({length: 40}).map((_, i) => (
                        <p key={i}>world {i} - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam, eius eos sunt, at delectus tempora pariatur excepturi sit amet hic. Illo quidem architecto quas! In officiis pariatur quos reiciendis.</p>
                    ))}   
            </div>   
        </div>
    </div>
  )
}

export default Scaffolding