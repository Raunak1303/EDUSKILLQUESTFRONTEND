"use client";

import { useEffect, useRef, useState } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import '/styles.css';

const Page = () => {
    const [profileImage, setProfileImage] = useState<string>('https://via.placeholder.com/100');
    const [userImage, setUserImage] = useState<string>('https://via.placeholder.com/50');

    const chart1Ref = useRef<Chart | null>(null);
    const chart2Ref = useRef<Chart | null>(null);
    const chart3Ref = useRef<Chart | null>(null);

    useEffect(() => {
        const createChart = (ctx: CanvasRenderingContext2D, data: any, title: string): Chart => {
            const config: ChartConfiguration = {
                type: 'doughnut',
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: title
                        }
                    }
                }
            };
            return new Chart(ctx, config);
        };

        const ctx1 = (document.getElementById('marksChart1') as HTMLCanvasElement)?.getContext('2d');
        if (ctx1) {
            if (chart1Ref.current) chart1Ref.current.destroy();
            chart1Ref.current = createChart(ctx1, {
                labels: ['Correct', 'Incorrect'],
                datasets: [{
                    label: 'Test 1 Marks',
                    data: [60, 40],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(201, 203, 207, 1)'
                    ],
                    borderWidth: 1
                }]
            }, 'Test 1 Analysis');
        }

        const ctx2 = (document.getElementById('marksChart2') as HTMLCanvasElement)?.getContext('2d');
        if (ctx2) {
            if (chart2Ref.current) chart2Ref.current.destroy();
            chart2Ref.current = createChart(ctx2, {
                labels: ['Correct', 'Incorrect'],
                datasets: [{
                    label: 'Test 2 Marks',
                    data: [80, 20],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(201, 203, 207, 1)'
                    ],
                    borderWidth: 1
                }]
            }, 'Test 2 Analysis');
        }

        const ctx3 = (document.getElementById('marksChart3') as HTMLCanvasElement)?.getContext('2d');
        if (ctx3) {
            if (chart3Ref.current) chart3Ref.current.destroy();
            chart3Ref.current = createChart(ctx3, {
                labels: ['Correct', 'Incorrect'],
                datasets: [{
                    label: 'Test 3 Marks',
                    data: [90, 10],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(201, 203, 207, 1)'
                    ],
                    borderWidth: 1
                }]
            }, 'Test 3 Analysis');
        }

        return () => {
            chart1Ref.current?.destroy();
            chart2Ref.current?.destroy();
            chart3Ref.current?.destroy();
        };
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
                setUserImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const viewMaterials = () => {
        window.location.href = 'study-materials.html'; // Update with actual URL
    };

    return (
        <div className="container">
            <aside className="sidebar">
                <div className="logo">
                    <img src="https://i.ibb.co/VqJnxv1/Edu-Skill-Quest-LOGO.png" alt="Edu-Skill-Quest-LOGO" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Test</a></li>
                        <li><a href="#">Study Material</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Supports/Feedback</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="main-content">
                <header>
                    <div className="user-info">
                        <span className="greeting">Hello User</span>
                        <img src={userImage} alt="User Image" className="profile-pic" />
                    </div>
                </header>
                <section className="dashboard">
                    <div className="profile-section box">
                        <h2 className="box-title">My Profile</h2>
                        <img src={profileImage} alt="Profile Photo" className="profile-pic-large" />
                        <input type="file" id="profilePhoto" name="profilePhoto" onChange={handleFileChange} />
                        <p>Name: Raunak</p>
                        <p>Email: raunak16@gmail.com</p>
                        <button className="change-password-btn">Change Password</button>
                    </div>
                    <div className="test-history box">
                        <h2 className="box-title">Test History</h2>
                        <ul>
                            <li>Test 1 - 01 Jan 2024</li>
                            <li>Test 2 - 15 Feb 2024</li>
                            <li>Test 3 - 20 Mar 2024</li>
                        </ul>
                    </div>
                    <div className="marks-section box">
                        <h2 className="box-title">My Marks</h2>
                        <ul>
                            <li>Test 1: 60</li>
                            <li>Test 2: 70</li>
                            <li>Test 3: 90</li>
                        </ul>
                        <div className="charts-container">
                            <canvas id="marksChart1"></canvas>
                            <canvas id="marksChart2"></canvas>
                            <canvas id="marksChart3"></canvas>
                        </div>
                    </div>
                    <div className="study-materials box">
                        <h2 className="box-title">Suggested Study Materials</h2>
                        <button className="view-materials-btn" onClick={viewMaterials}>View Study Materials</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Page;
