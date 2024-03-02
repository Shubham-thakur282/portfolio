


const Box = (props) => {
    return (
        <div onClick={() => window.open(props.url,"_blank")} className="col col-xl-4 col-md-6 box">
            <div className="card shadow-sm">
                    <img src={process.env.PUBLIC_URL+props.source} alt={props.title} className="bd-placeholder-img card-img-top" width="100%" height="225" />
                <div className="card-body">
                    <h3 className="card-text align-text-center">{props.title}</h3>
                </div>
            </div>
        </div>
    );
}



export default Box