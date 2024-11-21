export default function Contact(props){
    return (
        <div className="contact-card">
            <h1>{props.name}</h1>
            <p>{props.phone}</p>
        </div>
    )}