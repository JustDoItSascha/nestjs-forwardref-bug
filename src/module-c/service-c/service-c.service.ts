import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { timer } from 'rxjs';
import { ServiceAService } from '../../module-a/service-a/service-a.service';

@Injectable()
export class ServiceCService {
    constructor(
        @Inject(forwardRef(() => ServiceAService))
        private serviceA: ServiceAService,
    ) {
        // Expected: A2
        // Output: A1
        timer(500).subscribe(() => console.log(this.serviceA.name));
    }
}
