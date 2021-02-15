import React from 'react';
import styled from 'styled-components';
import Category from '../components/Category';

const CategoryListBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AddBtn = styled.div`
    background: #eee;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    text-align: center;
    line-height: 2rem;
`;

const CategoryList = () => {

    const texts = [
        {
            id: 1,
            title: '아이유'
        }, {
            id: 2,
            title: '디즈니'
        }, {
            id: 3,
            title: '잔나비'
        }
    ];

    return (
        <CategoryListBlock>
            {texts.map(item =>
                <Category
                    keyword={item.title}
                    key={item.id}
                />
            )}
            <AddBtn>+</AddBtn>
        </CategoryListBlock>
    )
}

export default CategoryList;