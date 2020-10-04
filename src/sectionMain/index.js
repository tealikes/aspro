import {createSectionFrom, createTag} from '../utils'
import {
   showImageLogo, showBanner,showTriangles, showTextual
}  from './templates' 

// Creating a section
export const main = () => createSectionFrom( header(), body())

// upper part of the section
const header = () => createTag('div', 'header', showImageLogo() )

// down part of the section
const body = () => createTag('div', 'content', 
     showBanner(),
     showTriangles(),
     showTextual() 
   )