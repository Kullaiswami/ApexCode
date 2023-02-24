import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lighting/platformShowToastEvent'

export default class ToastMessageComponent extends LightningElement 
{
    shoeSucessToast(){
    const showSucesMessage =new ShowToastEvent({
                                title:'successs',
                                message:'operation completed sucessfully',
                                variant:'success',
                                mode:'dismiable',
                              });
        this.dispatchEvent(ShowToastEvent)  
    }                        
}