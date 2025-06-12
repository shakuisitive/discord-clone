function Message() {
  return (
  <div className="bg-gray-700 text-white min-h-screen flex items-center justify-center">
    <div className="max-w-lg ">
      <div className="flex hover:bg-gray-800/30 px-4 py-1">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://plus.unsplash.com/premium_photo-1671656349048-faa6d0e9a3a6?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pic of a person"
        />
        <div>
          <p className="flex items-baseline">
            <span className="mr-2 text-sm text-green-500 font-medium">
              Shakir Hassan
            </span>
            <span className="text-xs text-gray-500">12/06/2025</span>
          </p>
          <p className="text-gray-300">
            In Tailwind CSS, items-baseline is a utility class used to align
            items along the baseline of the container on the cross axis
            (typically the vertical axis in a horizontal flex container).
          </p>
        </div>
      </div>

      <div className="mt-1 hover:bg-gray-800/30 px-4 py-1">
        <p className="pl-14 text-gray-300 ">
          Instead of aligning items by their top, center, or bottom, it aligns
          them so that the text baselines line up.
        </p>
      </div>

      <div className="mt-1 hover:bg-gray-800/30 px-4 py-1">
        <p className="pl-14 text-gray-300">
          Instead of aligning items by their top, center, or bottom, it aligns
          them so that the text baselines line up.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Message