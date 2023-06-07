import { useContext, useEffect, useState } from 'react';
import React from "react";
import './Trash.scss'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import frameContext from '../frameContext';
import { removeFrame } from '../../features/frame/FrameSlice';
import { removeActiveRequests } from '../../features/cypher/CypherSlice';
import { useDispatch } from 'react-redux';

const Trash = () => {
    const { frameKey, setFrameKey } = useContext(frameContext);
    const [del, setDel] = useState(false);
    const dispatch = useDispatch();
    
    const scrollToTop = () => {
        const navbar = document.getElementById("top-nav");
        if (navbar) {
          navbar.scrollIntoView({ behavior: "smooth" });
        }
    };

    const deleteAllFrames = () => {
        frameKey.forEach((key) => {
            dispatch(removeFrame(key));
            dispatch(removeActiveRequests(key));
        });
        setFrameKey([]);
        setDel(true);
    };
    
    useEffect(() => {
        if (del) {
            scrollToTop();
            setDel(false);
        }
    }, [del]);

    return (
        <div className="trash-icon-div">
            { frameKey.length > 0 &&
            <FontAwesomeIcon className="trash-icon" onClick={deleteAllFrames} icon={faTrash} size="2x"/>
            }
        </div>
    );
};

export default Trash;
