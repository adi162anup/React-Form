import './static.css';

const Static = () => {
    const headmsg = 'Learn to code by \n watching others';
    const bodymsg = 'See how experienced developers solve problems in real time. \n Watching scripted tutorials is great, but understanding how \n developers think is invaluable.'
    return(
    <div className="staticmain">
            <h1>{headmsg}</h1>
            <p>{bodymsg}</p>
    </div>
    )
}

export default Static;