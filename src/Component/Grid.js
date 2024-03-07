import './Grid.css'
import profile from '../assests/Images/profile.png'
import Review from './Review';


function Grid(){

    const reviewData = [
        {profile : profile,review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",reviewerName: "Gladis Lennon",reviewerDesignation : "Head of SEO" },
        {profile : profile,review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",reviewerName : "Gladis Lennon",reviewerDesignation : "Head of SEO" },
        {profile : profile,review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",reviewerName : "Gladis Lennon",reviewerDesignation : "Head of SEO" },
        {profile : profile,review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",reviewerName : "Gladis Lennon",reviewerDesignation : "Head of SEO" },
        {profile : profile,review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",reviewerName : "Gladis Lennon",reviewerDesignation : "Head of SEO" },
        {profile : profile,review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.",reviewerName : "Gladis Lennon",reviewerDesignation : "Head of SEO" },
    ]

    return(
        <div id='container'>

            {
                reviewData.map((elem,index)=>{
                    return(
                        <Review  imgSrc = {elem.profile} review={elem.review} reviewerName={elem.reviewerName} reviewerDesignation={elem.reviewerDesignation} />
                    )
                })
            }
            
        </div>
    )
};

export default Grid;