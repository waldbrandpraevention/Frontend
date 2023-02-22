import React, { useState, useEffect } from 'react';
import { BiDownArrow, BiRightArrow, BiUpArrow } from "react-icons/bi";
import styled from 'styled-components';

interface SortingArrowProps {
    value: number
}

const SortingArrow = ({ value }: SortingArrowProps) => {

    return (
        <div>
            <div>{value === 0 && <BiUpArrow></BiUpArrow>}</div>
            <div>{value === 1 && <BiDownArrow></BiDownArrow>}</div>
            <div>{value === 2 && <BiRightArrow></BiRightArrow>}</div>
        </div>
    );
};

export default SortingArrow;