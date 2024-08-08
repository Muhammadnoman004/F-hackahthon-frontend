import React, { useState } from 'react'
import { Button, Space, Table } from 'antd';
import { Container } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import AllStudentPage from './AllStudentPage';
import AllTeacherPage from './AllTeacherPage';

// const columns = [
//     {
//         title: 'S/No',
//         dataIndex: 'serialNo',
//         key: 'serialNo',
//         width: '10%',
//         render: (number) => <a>{number}</a>,
//         sorter: (a, b) => a.serialNo - b.serialNo,
//     },
//     {
//         title: 'Course Name',
//         dataIndex: 'name',
//     },
//     {
//         title: 'Action',
//         dataIndex: 'action',
//         width: '20%',
//         render: (_, record) => (
//             <Space size="middle">
//                 <a className='text-xl hover:text-green-500'><FaEdit /></a>
//                 <a className='text-xl hover:text-red-500'><FaDeleteLeft /></a>
//             </Space>
//         ),
//     },
// ];
// const data = [
//     {
//         key: '1',
//         serialNo: '01',
//         name: 'Web Development',
//     },
//     {
//         key: '2',
//         serialNo: '02',
//         name: 'Mobile App Development',
//     },
//     {
//         key: '3',
//         serialNo: '03',
//         name: 'Python',
//     },
//     {
//         key: '4',
//         serialNo: '04',
//         name: 'Graphic Designing',
//     },
// ];

export default function AdminHomePage() {

    const [selectedPage, setSelectedPage] = useState('AllTeacher')

    const RenderComponent = () => {
        switch (selectedPage) {
            case 'AllTeacher':
                return <AllTeacherPage />;
            case 'AllStudent':
                return <AllStudentPage />;
            default:
                return null;
        }
    }

    return (
        <div>
            <Container>
                <div className='my-4 mx-3 flex gap-3'>
                    <Button onClick={() => setSelectedPage('AllTeacher')}
                        style={{
                            backgroundColor: selectedPage === 'AllTeacher' ? '#87CEEB' : 'transparent',
                        }}
                        type='text'
                        className={` border-sky-blue ${selectedPage === 'AllStudent' ? 'hover:shadow-md' : ''}`}
                    >All Teachers</Button>
                    <Button onClick={() => setSelectedPage('AllStudent')}
                        style={{
                            backgroundColor: selectedPage === 'AllStudent' ? '#87CEEB' : 'transparent',
                        }}
                        type='text'
                        className={` border-sky-blue ${selectedPage === 'AllTeacher' ? 'hover:shadow-md' : ''}`}
                    >All Students</Button>
                </div>
                <div>
                    {RenderComponent()}
                </div>
                {/* <AllStudentPage /> */}
                {/* <div className='flex justify-between m-4'>
                    <div>
                        <h1 className='font-bold text-xl'>All Courses</h1>
                    </div>
                    <div>
                        <button className='p-1 px-3 w-auto  bg-sky-blue text-white rounded-md border-none hover:bg-sky-400 focus:shadow-lg'>Add Course</button>
                    </div>
                </div>
                <Table columns={columns} dataSource={data} /> */}
            </Container>
        </div >
    )
}