import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { connect } from 'amqplib/callback_api';
import { ServiceCService } from '../../module-c/service-c/service-c.service';

@Injectable()
export class ServiceAService {
    name = 'A1';

    constructor(
        // It will work, if you uncomment the following lines
        @Inject(forwardRef(() => ServiceCService))
        private serviceC: ServiceCService,
    ) {
        // Start RabbitMQ Server with docker and change the port here
        connect('amqp://localhost:32770', () => this.name = 'A2');
    }
}
