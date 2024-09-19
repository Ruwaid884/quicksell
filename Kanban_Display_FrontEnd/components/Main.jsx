import '../Css/Responsive.css'
import { useEffect, useState } from 'react';


import priority0 from '../src/assets/No-priority.svg';
import priority1 from '../src/assets/Img - Low Priority.svg';
import priority2 from '../src/assets/Img - Medium Priority.svg';
import priority3 from '../src/assets/Img - High Priority.svg';
import priority4 from '../src/assets/SVG - Urgent Priority colour.svg';
import todo0 from '../src/assets/To-do.svg';
import threeDotMenu from '../src/assets/3 dot menu.svg'
import add from '../src/assets/add.svg'
import Done from '../src/assets/Done.svg'
import Display from '../src/assets/Display.svg'
import down from '../src/assets/down.svg'
import backlog from '../src/assets/Backlog.svg'
import in_progress from '../src/assets/in-progress.svg'
import Cancelled from '../src/assets/Cancelled.svg'
import imageA from "../src/assets/human.svg"


import Card from "../components/Card";

const prioritySvgMap = {
    0: priority0,
    1: priority1,
    2: priority2,
    3: priority3,
    4: priority4,
    "Todo": todo0,
    "In progress": in_progress,
    "Backlog": backlog,
    "Done": Done,
    "Display": Display,
    "Down": down,
    "Cancelled": Cancelled

};

const priorityNameMap = {
    0: 'No Priority',
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Urgent',
};

const Main = ({ groupBy, orderBy }) => {
    const [dataTickets, setDataTickets] = useState([]);
    const [userNameMap, setUserNameMap] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
                const data = await response.json();
                setDataTickets(data.tickets);
                console.log(data)
                const users = data.users.reduce((acc, user) => {
                    acc[user.id] = user.name;
                    return acc;
                }, priorityNameMap);
                setUserNameMap(users);
                console.log(userNameMap)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const groupTickets = () => {
        const grouped = dataTickets.reduce((acc, ticket) => {
            const key = ticket[groupBy];
            if (!acc[key]) acc[key] = [];
            acc[key].push(ticket);
            return acc;
        }, {});

        const allStatuses = ["Todo", "In progress", "Backlog", "Done", "Cancelled"];
        allStatuses.forEach(status => {
            if (!grouped[status] && groupBy == 'status') {
                grouped[status] = [];
            }
        });

        return grouped;
    };

    const sortTickets = (ticketsToSort) => {
        return ticketsToSort.sort((a, b) => {
            if (orderBy === 'priority') {
                return b.priority - a.priority;
            } else if (orderBy === 'title') {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });
    };

    const renderGroupedTickets = () => {
        const grouped = groupTickets();
        return (
            <div className="hero">
                {Object.entries(grouped).map(([groupKey, groupTickets]) => (
                    <div className="Main-hero" key={groupKey}>
                        <div className="group-header">
                            <div className="group-info">
                                <img
                                    className="group-icon"
                                    src={groupBy === "priority" ? (groupTickets[0] ? prioritySvgMap[groupTickets[0].priority] : "") :
                                        groupBy === "userId" ? imageA : prioritySvgMap[groupKey]}
                                    alt="Icon"
                                />
                                <span className="group-title">{priorityNameMap[groupKey] || groupKey}</span>
                                <span className="group-count">{groupTickets.length}</span>
                            </div>
                            <div className="group-actions">
                                <img src={add} alt="Add" />
                                <img src={threeDotMenu} alt="Menu" />
                            </div>
                        </div>

                        <div className="card-container">
                            {sortTickets(groupTickets).map((ticket) => (
                                <Card
                                    key={ticket.id}
                                    id={ticket.id}
                                    title={ticket.title}
                                    status={ticket.status}
                                    priority={ticket ? prioritySvgMap[ticket.priority] : ""}
                                    tag={ticket.tag[0]}
                                    svg={ticket ? prioritySvgMap[ticket.status] : ""}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return renderGroupedTickets();
};

export default Main;
