# Configuration Formspree pour le formulaire de contact

## Étapes pour configurer Formspree

### 1. Créer un compte Formspree
1. Allez sur [https://formspree.io](https://formspree.io)
2. Créez un compte gratuit ou connectez-vous
3. Cliquez sur "New Form" pour créer un nouveau formulaire

### 2. Configurer le formulaire
1. Donnez un nom à votre formulaire (ex: "Contact Portfolio")
2. Ajoutez votre email où vous voulez recevoir les messages
3. Copiez l'ID du formulaire qui ressemble à `xeojvqrk`

### 3. Mettre à jour le code
Dans le fichier `src/app/components/contact.component.ts`, remplacez `YOUR_FORM_ID` par votre vrai ID Formspree :

```typescript
// Ligne 22 - Remplacez YOUR_FORM_ID par votre ID réel
private formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';
```

Et dans `src/app/components/contact.component.html`, ligne 7 :

```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

### 4. Fonctionnalités incluses

✅ **Envoi AJAX** - Le formulaire s'envoie sans rechargement de page
✅ **Messages de statut** - Affichage des messages de succès/erreur
✅ **Validation** - Vérification des champs obligatoires
✅ **États de chargement** - Indicateur visuel pendant l'envoi
✅ **Protection spam** - Champ honeypot inclus
✅ **Responsive** - Fonctionne sur mobile et desktop
✅ **Animations** - Transitions fluides pour l'UX

### 5. Configuration avancée (optionnel)

Dans le dashboard Formspree, vous pouvez :
- Personnaliser l'email de confirmation automatique
- Ajouter des redirections après soumission
- Configurer des notifications
- Ajouter des intégrations (Slack, etc.)

### 6. Limite du plan gratuit
- 50 soumissions par mois
- Pour plus, passez au plan payant

### 7. Test
Une fois l'ID configuré, testez le formulaire pour vérifier que vous recevez bien les emails.

## Dépannage

Si le formulaire ne fonctionne pas :
1. Vérifiez que l'ID Formspree est correct
2. Vérifiez la console du navigateur pour les erreurs
3. Assurez-vous que le domaine est autorisé dans Formspree
4. Vérifiez vos spams pour les premiers emails de test 