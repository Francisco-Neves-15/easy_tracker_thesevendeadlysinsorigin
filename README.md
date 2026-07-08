## Fluxo

1. Primeira Execução: Execute o python `scripts/build.py`. Ele vai criar o user_data.json contendo os heróis e as roupas dele (todas com `acquired: false`).

2. Atualização Manual: Abra o `user_data.json` e altera o booleano de algum herói ou roupa que adquiriu para: `true`.

3. Consolidação: Execute o python `scripts/build.py` de novo. Os arquivos `materials_summary.txt` e `outfits_summary.txt` serão reescritos automaticamente refletindo exatamente a quantidade de itens que ainda restam baseado no seu inventário atualizado!

> Execute o `scripts/build.py` **NÃO** vai sobrescrever as informações no `user_data.json`, mas, se quiser garantir os dados, apenas criei uma cópia antes de executar.
