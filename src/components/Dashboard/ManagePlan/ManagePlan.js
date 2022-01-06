import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const ManagePlan = () => {


    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://glacial-shelf-30568.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [tours])

    const handleDeletePlace = id => {
        const uri = `https://glacial-shelf-30568.herokuapp.com/tour/${id}`;
        const exist = window.confirm("Are You sure want to delete ??");
        if (exist) {
            fetch(uri, {
                method: "DELETE",
            })
                .then()
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remainingCar = tours.filter(order => order._id !== id);
                        setTours(remainingCar);
                    }
                })
        }
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tour Name</th>
                    <th scope="col">Tour Price</th>
                    <th scope="col">Division Name</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {tours.map((item, index) => {
                    return (
                        <tr key={item._id}>
                            <th scope="row">{index + 1}</th>
                            <td className='fw-bold'>{item.placeName}</td>
                            <td className='fw-bold'>{item.price}</td>
                            <td className='fw-bold'>{item.divisionName}</td>
                            <td>
                                <button
                                    className="btn"
                                    disabled={item.isPaid}
                                // onClick={() => openModalSetId(item._id)}
                                >
                                    <AiFillDelete
                                        onClick={() => handleDeletePlace(item._id)}
                                        className="text-danger"
                                        style={{ fontSize: "25px" }}
                                    />
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ManagePlan;
