import { Injectable } from '@angular/core';
import { SampleObject } from '../classes/sampleObject';

@Injectable()
export class SampleService {

    getSampleObject(): SampleObject {
       return new SampleObject("Sample object serviced by SampleService");
    }

}

