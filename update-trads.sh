#!/bin/bash
git config credential.helper
git config --global user.email "zenbot+github@coderdojo.org"
git config --global user.name "ZenPlatformBot"
git clone https://${GITHUB_AUTH_TOKEN}@github.com/CoderDojo/coderdojo.com.git
for lang in fr jp; do 
  crowdin download -l ${lang} --verbose; 
done
cd coderdojo.com
#git remote set-url origin https://${GITHUB_AUTH_TOKEN}@github.com/CoderDojo/coderdojo.com.git
git add locales/
git commit -m "Updating translations"
git push origin HEAD:master
