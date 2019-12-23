# Site web - Raphaelle Grassigli

## Développer en local : `yarn start`

### Setup initial

1. Installer VSCode : https://code.visualstudio.com/download
2. Installer les extensions "Color Highlight", "Prettier - Code formatter" et "Sass"
3. Dans les settings (ctrl+,), activer l'option "Format On Save"

Dans la console

1. Installer NodeJS : https://nodejs.org/en/download/
2. Installer Yarn : https://yarnpkg.com/lang/en/docs/install/#windows-stable
3. `git clone git@github.com:matthis-perrin/raphaelle-grassigli.git`
4. `cd raphaelle-grassigli`
5. `yarn install`

## Déployer en prod : `yarn deploy`

### Setup initial

1. Créer le dossier `.aws` dans le répertoire utilisateur (`C:\Users\<NOM>\.aws\` sur Windows ou `~/.aws/` sur Mac)
2. Dans le dossier `.aws` créer le fichier `config` avec le contenu suivant :

```
[default]
region = eu-west-3
output = json
```

3. Toujours dans le dossier `.aws`, créer le fichier `credentials` avec le contenu suivant :

```
[default]
aws_access_key_id = <ACCESS_KEY_ID>
aws_secret_access_key = <SECRET_ACCESS_KEY>
```

Si les identifiants ont été perdu, on peut en regénérer des nouveaux :

1. Aller dans l'espace AWS "My Security Credentials" : https://console.aws.amazon.com/iam/home?#/security_credentials
2. Cliquer sur le bouton "Create access key" et récupérer les identifiants. (Attention, le secret ne sera affiché à l'écran qu'une seul fois)
