import ErrorImg from "../../img/Error.jpg"

function Error() {
    return (
        <>
        <div className="container">
            <a href="#link">
                <img src={ErrorImg} alt="ErrorImg" width={780} height={330} />
            </a>
        </div>
        </>
    )
}

export default Error