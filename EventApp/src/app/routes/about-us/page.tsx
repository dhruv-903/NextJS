const AboutPage = (props:any) =>{
    return (
        <div>
            <h1>{props.data}</h1>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non in exercitationem voluptates velit recusandae aut veritatis nostrum eum, ex itaque quia sint tempore quasi natus laborum hic dolor nulla saepe modi aliquid suscipit dicta! Minus animi libero dignissimos, commodi suscipit ab excepturi impedit ullam unde ad exercitationem atque officia assumenda omnis, non quas aperiam illum voluptates culpa harum. Eum cupiditate aut pariatur molestias nemo quaerat. Ipsam est laudantium necessitatibus quos laborum, minima atque tempore minus molestiae corporis eveniet, iusto fugiat ex? Quia natus doloribus ex nulla omnis? Libero, eaque amet consequuntur incidunt voluptate saepe ullam molestias alias corporis tenetur quis.</p>
        </div>
    )
}

export const getServerSideProps = async () => {
    console.log("I am server side page")
    return {
      props: {
        data: "I love watching doraemon"
      }
    }
  }

export default AboutPage;