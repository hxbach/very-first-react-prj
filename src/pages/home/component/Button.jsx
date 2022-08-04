export function Button({button, color}) {
    return(
        <div>
            <a href="" className={`btn btn-${color}`}> {` ${button}`}</a>
        </div>
    );
}