import '../styles/CompanyDetails.css'
import cglogo from '../images/cg-logo.png'


function showLegend(event,id){
    console.log(id);
    if(document.getElementById(id))
        document.getElementById(id).style.display='inline';
}
function hideLegend(id){
    console.log(id);
    if(document.getElementById(id))
        document.getElementById(id).style.display='none';
}

function CompanyDetails(){
    
    return (
        <>
            <header>
                <img id='cglogo' src={cglogo} alt='cg-logo'></img>
                <h1 id='digital_banking_header'>Digital Banking</h1>
            </header>
            {/* <div className="companyDetails">
                <form method='POST'>
                    <table>
                        <tr>
                            <td><input type='text' id='firstName' name='firstName' placeholder='First Name *'></input></td>
                            <td><input type='text' id='middleName' name='middleName' placeholder='Middle Name'></input></td>
                            <td><input type='text' id='lastName' name='lastName' placeholder='Last Name *'></input></td>
                        </tr>
                        <tr>
                            <td><input type='date'/></td>
                            <td><input type='radio' name='gender'/><label>Male</label><input type='radio' name='gender'/><label>Female</label><input type='radio' name='gender'/><label>Other</label></td>
                            <td>
                                <fieldset id='firstName_fieldset'>
                                    <legend id='firstName_legend'></legend>
                                </fieldset>
                                <select name='preferred_language'>
                                    <option value="english">English</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}><input type='text' id='address_line' name='address_line1' placeholder='Address Line 1'/></td>
                        </tr>
                        <tr>
                            <td colSpan={3}><input type='text' id='address_line' name='address_line2' placeholder='Address Line 2'/></td>
                        </tr>
                        <tr>
                            <td><input type='text' name='city' placeholder='City *'/></td>
                            <td><input type='text' name='country' placeholder='Country *'/></td>
                            <td><input type='text' name='postal_code' placeholder='Postal Code *'/></td>
                        </tr>
                        <tr>
                            <td><input type='email' name='email' placeholder='Email *'/></td>
                            <td><input type='text' name='country_code' value={'+91'}/></td>
                            <td><input type='text' name='phone' placeholder='Phone *'/></td>
                        </tr>
                        <tr>
                            <td><button>Back</button></td>
                            <td></td>
                            <td><button>Continue</button></td>
                        </tr>
                    </table>
                </form>
            </div> */}
            <div className='companyDetails2'>
                <h1>Retail Onboarding</h1>
                <fieldset id='firstName_fieldset'>
                    <legend id='firstName_legend'>First Name</legend>
                    <input type='text' id='firstName' name='firstName' placeholder='First Name *' onFocus={event=>showLegend(event,"firstName_legend")} onBlur={()=>hideLegend("firstName_legend")}></input>
                </fieldset>
                <fieldset id='middleName_fieldset'>
                    <legend id='middleName_legend'>Middle Name</legend>
                    <input type='text' id='middleName' name='middleName' placeholder='Middle Name' onFocus={event=>showLegend(event,"middleName_legend")} onBlur={()=>hideLegend("middleName_legend")}></input>
                </fieldset>
                <fieldset id='lastName_fieldset'>
                    <legend id='lastName_legend'>Last Name</legend>
                    <input type='text' id='lastName' name='lastName' placeholder='Last Name *' onFocus={event=>showLegend(event,"lastName_legend")} onBlur={()=>hideLegend("lastName_legend")}></input>
                </fieldset><br/>
                <fieldset id='dob_fieldset'>
                    <legend id='dob_legend'>Date Of Birth</legend>
                    <input type='date' id='dob' name='dob'/>
                </fieldset>
                <fieldset id='gender_fieldset'>
                    <legend id='gender_legend'>Gender</legend>
                    <input type='radio' name='gender'/><label>Male</label><input type='radio' name='gender'/><label>Female</label><input type='radio' name='gender'/><label>Other</label>
                </fieldset>
                <fieldset id='lang_fieldset'>
                    <legend id='lang_legend'>Preferred Language</legend>
                    <select name='preferred_language' onFocus={event=>showLegend(event,"lang_legend")} onBlur={()=>hideLegend("lang_legend")}>
                        <option>Preferred Language *</option>
                        <option value="english">English</option>
                    </select>
                </fieldset><br/>
                <fieldset id='address_line1_fieldset'>
                    <legend id='address_line1_legend'>Address Line 1</legend>
                    <input type='text' id='address_line' name='address_line1' placeholder='Address Line 1 *' onFocus={event=>showLegend(event,"address_line1_legend")} onBlur={()=>hideLegend("address_line1_legend")}/>
                </fieldset><br/>
                <fieldset id='address_line2_fieldset'>
                    <legend id='address_line2_legend'>Address Line 2</legend>
                    <input type='text' id='address_line' name='address_line2' placeholder='Address Line 2' onFocus={event=>showLegend(event,"address_line2_legend")} onBlur={()=>hideLegend("address_line2_legend")}/>
                </fieldset><br/>
                <fieldset id='city_fieldset'>
                    <legend id='city_legend'>City</legend>
                    <input type='text' name='city' placeholder='City *' onFocus={event=>showLegend(event,"city_legend")} onBlur={()=>hideLegend("city_legend")}/>
                </fieldset>
                <fieldset id='country_fieldset'>
                    <legend id='country_legend'>Country</legend>
                    <input type='text' name='country' placeholder='Country *' onFocus={event=>showLegend(event,"country_legend")} onBlur={()=>hideLegend("country_legend")}/>
                </fieldset>
                <fieldset id='postal_code_fieldset'>
                    <legend id='postal_code_legend'>Postal Code</legend>
                    <input type='text' name='postal_code' placeholder='Postal Code *' onFocus={event=>showLegend(event,"postal_code_legend")} onBlur={()=>hideLegend("postal_code_legend")}/>
                </fieldset><br/>
                <fieldset id='email_fieldset'>
                    <legend id='email_legend'>Email</legend>
                    <input type='email' name='email' placeholder='Email *' onFocus={event=>showLegend(event,"email_legend")} onBlur={()=>hideLegend("email_legend")}/>
                </fieldset>
                <fieldset id='cc_fieldset'>
                    <legend id='cc_legend'>cc</legend>
                    <input type='text' name='country_code' value={'+91'} onFocus={event=>showLegend(event,"cc_legend")} onBlur={()=>hideLegend("cc_legend")}/>
                </fieldset>
                <fieldset id='phone_fieldset'>
                    <legend id='phone_legend'>Phone</legend>
                    <input type='text' name='phone' placeholder='Phone *' onFocus={event=>showLegend(event,"phone_legend")} onBlur={()=>hideLegend("phone_legend")}/>
                </fieldset><br/>
                <button id='back_btn'>Back</button>
                <button id='continue_btn'>Continue</button>
            </div>
        </>
    )
}
export default CompanyDetails;