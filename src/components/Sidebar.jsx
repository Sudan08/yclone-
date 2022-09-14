import React from 'react'
import {Stack} from '@mui/material';
import {categories} from '../components/utils/constants'




const Categories = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
 
    flexDirection = 'row'
    sx= {{
    overflowY : 'auto',
    height :{ sx :'95vh ', md : '95%'},
    flexDirection : {md :'column'},
    mx:'15px'

    }}>
    {categories.map((category)=>(
        <button
        className ='category-btn'
        onClick ={()=> setSelectedCategory(category.name)}
        style={{background : category.name === selectedCategory && '#FC1503',
        color :'white'}}
        key = {category.name}>
            <span style = {{ color : category.name === selectedCategory ? 'white':'red' , marginRight : '13px' }}>{category.icon}</span>
            <span style = {{ opacity : category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
                
        </button>
    ))}
    </Stack>
  )
}

export default Categoriesf