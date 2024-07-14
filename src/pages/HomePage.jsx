import Sidebar from "../components/Sidebar"

const HomePage = () => {
  return (
    <div className=" grid grid-cols-12 w-full h-full">
      <div className=" col-span-4 ">
      <Sidebar/>
      </div>
      <div className=" col-span-6">
        <h1>Welcome to My Home Page</h1>
        <p>This is the home page.</p>
      </div>

    </div>
  )
}

export default HomePage