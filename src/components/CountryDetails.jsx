import styled from "styled-components";
import { Link } from "react-router-dom";

const CountryDetails = ({data}) => {
   const joinObjData = objData => {
      let str = [];
      if(objData) objData.forEach(obj => str.push(obj.name));
      return str.join(', ');
   };
   const langs = joinObjData(data.languages),
         currencies = joinObjData(data.currencies),
         borderMap = JSON.parse(localStorage.borderMap);

   return(
      <>
         <img src={data.flag} alt={data.name + ' Flag'} />

         <div>
            <h1 style={{fontSize: '2rem'}}>{data.name}</h1>
            <DivUlInfo>
               <ul>
                  <li><strong>Native Name:</strong> {data.nativeName}</li>
                  <li><strong>Population:</strong> {data.population.toLocaleString()}</li>
                  <li><strong>Region:</strong> {data.region}</li>
                  <li><strong>Sub Region:</strong> {data.subregion}</li>
                  <li><strong>Capital:</strong> {data.capital !== undefined ? data.capital : 'No Capital'}</li>
               </ul>

               <ul>
                  <li><strong>Top Level Domain:</strong> {data.topLevelDomain}</li>                     
                  <li><strong>Currencies:</strong> {currencies}</li>
                  <li><strong>Languages:</strong> {langs}</li>
               </ul>
            </DivUlInfo>
            
            <DivBorders>
               <p><strong>Border Countries:</strong></p>
               <ul>
                  {data.borders !== undefined ?
                     data.borders?.map(border =>
                        <li key={border}>
                           <Link to={`/${border}`}>{borderMap[border]}</Link>
                        </li>
                     ) :
                     <li>No Countries</li>
                  }
               </ul>
            </DivBorders>
         </div>
      </>
   );
}

const DivUlInfo = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 3rem;
   margin-top: 1.5rem;
   margin-bottom: 2rem;
   @media (max-width: 800px) {
      flex-direction: column;
      margin-bottom: 0;
   }
   ul {
      width: 50%;
      @media (max-width: 460px) {
         width: 100%; 
      }
   }
`;
const DivBorders = styled.div`
   > * {
      display: inline-block;
      @media (max-width: 460px) {
         display: block;
      }
   }
   ul {
      display: inline-flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: .8rem;
      max-width: 22vw;
      padding-left: .8rem;
      @media (max-width: 460px) {
         max-width: 100%;
         padding-left: 0;
         margin-top: 1rem;
      }
   }
   li {
      padding: .5rem 1.5rem;
      background-color: var(--ele);
      border-radius: .3rem;
      box-shadow: 0 0 .3rem var(--shadow);
   }
`;

export default CountryDetails;