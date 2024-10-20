async function getData(){
    const res =await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}
const page = async () => {
    const data = await getData();
    console.log('dataset',data);
  return (
    <div className="flex justify-center">
      <h1 className="font-bold">Posts</h1>
      <div className="flex flex-col justify-center align-middle">
      {
        data?.map((item,index)=>(
            <div id={item?.id}>
            <h2>{item?.title}</h2>
            <p>{item?.body}</p>
            <hr/>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default page
