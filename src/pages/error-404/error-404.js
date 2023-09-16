import "./error-404.css"

export const Error = ()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
    return(
        <div>
        <div className="error-404">
        </div>
            <h1>Page No Found</h1>
        </div>
    )
}