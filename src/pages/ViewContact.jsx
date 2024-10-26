import { useSelector } from "react-redux";

function ViewContact() {

    let details = useSelector((state) => state.contactRoot.contact);
    console.log(details);

    return (
        <>
            <h1>
                Contact List
            </h1>
        </>
    )
}

export default ViewContact;