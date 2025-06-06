import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    @Output() contact = new EventEmitter<string>();

    services = [
        {
            icon: '🌐',
            title: 'Sites Web',
            description: 'Sites web professionnels et responsifs, conçus pour convertir vos visiteurs en clients',
            price: 'À partir de 500 CAD',
            features: ['Design moderne et responsive', 'SEO optimisé', 'Performance maximale', 'Hébergement inclus', 'Support technique']
        },
        {
            icon: '📱',
            title: 'Applications Web',
            description: 'Applications web sur mesure adaptées à vos processus métier spécifiques',
            price: 'Sur devis',
            features: ['Architecture moderne', 'Base de données', 'API intégrées', 'Sécurité renforcée']
        },
        {
            icon: '🔧',
            title: 'Maintenance',
            description: 'Support et maintenance continue pour garder votre site à jour et sécurisé',
            price: 'À partir de 100 CAD/mois',
            features: ['Mises à jour régulières', 'Monitoring 24/7', 'Backups automatiques', 'Support prioritaire']
        }
    ];

    scrollToContact() {
        this.contact.emit('contact');
    }
} 