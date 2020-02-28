import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ServiceCService } from '../../module-c/service-c/service-c.service';

@Injectable()
export class ServiceBService {
    name = 'B1';

    constructor(
        @Inject(forwardRef(() => ServiceCService))
        private serviceC: ServiceCService,
    ) {
    }
}
