import React from 'react'
import Btnpage from './Btnpage';
import BgColor from './BgColor';
import img1 from '../assets/images/png/img1.png';

const Product = () => {
    return (
        <div className=''>
            <div className='container pt-3'>
                <p className='text-center fw-bold text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi dolor, dolore facilis eius nesciunt. Cupiditate minima possimus suscipit accusamus magni laborum quidem nemo error quod voluptates, quaerat, nobis nostrum dolor, deserunt sapiente nesciunt. Quasi odit aliquam vel fugit a. Assumenda ad deleniti atque repellendus nesciunt, ut laboriosam rerum delectus a accusamus maiores, temporibus ex non, dignissimos tempore corrupti illo expedita alias illum optio ratione totam veniam voluptatum rem! Quasi, ducimus. Culpa optio molestiae laudantium hic. Dolor officiis culpa officia voluptatibus deserunt veritatis fugiat quas iusto consequuntur sapiente doloribus totam quae, ipsa quibusdam facilis obcaecati perspiciatis blanditiis molestias tempore molestiae vero ex, distinctio eius nesciunt? Eveniet ipsa accusantium, sit vero totam tempore officia fuga illo blanditiis doloribus suscipit dolorum, aperiam vel a deleniti.</p>
                <Btnpage name='contact' />
                <p className='text-center fw-bold text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi dolor, dolore facilis eius nesciunt. Cupiditate minima possimus suscipit accusamus magni laborum quidem nemo error quod voluptates, quaerat, nobis nostrum dolor, deserunt sapiente nesciunt. Quasi odit aliquam vel fugit a. Assumenda ad deleniti atque repellendus nesciunt, ut laboriosam rerum delectus a accusamus maiores, temporibus ex non, dignissimos tempore corrupti illo expedita alias illum optio ratione totam veniam voluptatum rem! Quasi, ducimus. Culpa optio molestiae laudantium hic. Dolor officiis culpa officia voluptatibus deserunt veritatis fugiat quas iusto consequuntur sapiente doloribus totam quae, ipsa quibusdam facilis obcaecati perspiciatis blanditiis molestias tempore molestiae vero ex, distinctio eius nesciunt? Eveniet ipsa accusantium, sit vero totam tempore officia fuga illo blanditiis doloribus suscipit dolorum, aperiam vel a deleniti.</p>
                <BgColor imgpath={img1} />
                <p className='text-center fw-bold text-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi dolor, dolore facilis eius nesciunt. Cupiditate minima possimus suscipit accusamus magni laborum quidem nemo error quod voluptates, quaerat, nobis nostrum dolor, deserunt sapiente nesciunt. Quasi odit aliquam vel fugit a. Assumenda ad deleniti atque repellendus nesciunt, ut laboriosam rerum delectus a accusamus maiores, temporibus ex non, dignissimos tempore corrupti illo expedita alias illum optio ratione totam veniam voluptatum rem! Quasi, ducimus. Culpa optio molestiae laudantium hic. Dolor officiis culpa officia voluptatibus deserunt veritatis fugiat quas iusto consequuntur sapiente doloribus totam quae, ipsa quibusdam facilis obcaecati perspiciatis blanditiis molestias tempore molestiae vero ex, distinctio eius nesciunt? Eveniet ipsa accusantium, sit vero totam tempore officia fuga illo blanditiis doloribus suscipit dolorum, aperiam vel a deleniti.</p>
            </div>
        </div>
    )
}

export default Product;