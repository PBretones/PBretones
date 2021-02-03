function Post(gen) {

    const defaultTitle = "Sin titulo";

    return (
        <>
            
            <div className="Card">
                <div className="CardImage">
                    <img src={gen.image} alt="" width="286px" height="180px" />
                </div>
                <div>
                {gen.titulo ? (<h1>{gen.titulo}</h1>) : (<h1>{defaultTitle}</h1>)}
                    <p>{gen.p}</p>
                </div>
                <div>
                    <button className="btn btn-success">{gen.button}</button>
                </div>
            </div>
        </>


    )
}

export default Post;