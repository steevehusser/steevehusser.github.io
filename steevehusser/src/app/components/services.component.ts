import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
    @Input() visible: boolean = false;

    services = [
        {
            icon: '🌐',
            title: 'Sites Web',
            description: 'Sites web modernes et responsifs adaptés à vos besoins',
            price: 'À partir de 500 CAD',
            features: ['Design responsive', 'SEO optimisé', 'Performance maximale', 'Support technique']
        },
        {
            icon: '📱',
            title: 'Applications Web',
            description: 'Applications web complexes et sur mesure',
            price: 'Sur devis',
            features: ['Architecture moderne', 'Base de données', 'API intégrées', 'Sécurité renforcée']
        },
        {
            icon: '🔧',
            title: 'Maintenance',
            description: 'Support et maintenance continue de vos projets',
            price: 'À partir de 100 CAD/mois',
            features: ['Mises à jour régulières', 'Monitoring 24/7', 'Backups automatiques', 'Support prioritaire']
        }
    ];
} 