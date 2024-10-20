const page = ({params}) => {
    console.log('id',params.id)
  return (
    <div>
      <h1>Profile: {params.id}</h1>
    </div>
  )
}

export default page
