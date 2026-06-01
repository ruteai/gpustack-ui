export default {
  'gpuservice.template': 'Modelo de Instância de GPU',
  'gpuservice.template.add': 'Adicionar Modelo de Instância',
  'gpuservice.template.edit': 'Editar Modelo de Instância',
  'gpuservice.template.filter.name': 'Filtrar por nome',
  'gpuservice.template.filter.vendor': 'Filtrar por fabricante',
  'gpuservice.template.image': 'Imagem',
  'gpuservice.template.imagePullPolicy': 'Política de Pull de Imagem',
  'gpuservice.template.imagePullPolicy.always': 'Sempre',
  'gpuservice.template.imagePullPolicy.ifNotPresent': 'Se Não Presente',
  'gpuservice.template.imagePullPolicy.never': 'Nunca',
  'gpuservice.template.command': 'Comando de Inicialização do Container',
  'gpuservice.template.command.placeholder':
    'Separe argumentos com espaços; envolva argumentos contendo espaços em aspas, ex: /bin/bash -c "echo hello world"',
  'gpuservice.template.mountPath': 'Caminho de Montagem',
  'gpuservice.template.containerDisk': 'Disco do Container (GB)',
  'gpuservice.template.memory': 'Memória (GB)',
  'gpuservice.instance.containerDisk.remaining':
    'Disco do Container (Máx {count} GB)',
  'gpuservice.instance.memory.remaining': 'Memória (Máx {count} GB)',
  'gpuservice.template.displayName': 'Nome de Exibição',
  'gpuservice.template.displayName.max':
    'O nome de exibição não pode exceder 63 caracteres.',
  'gpuservice.template.ports': 'Portas',
  'gpuservice.template.ports.add': 'Adicionar Porta',
  'gpuservice.template.ports.invalid':
    'Por favor complete a configuração de portas.',
  'gpuservice.template.ports.name': 'Nome',
  'gpuservice.template.ports.name.max':
    'O nome da porta não pode exceder 16 caracteres.',
  'gpuservice.template.ports.name.duplicate':
    'Os nomes de porta devem ser únicos.',
  'gpuservice.template.env': 'Variáveis de Ambiente',
  'gpuservice.template.env.add': 'Adicionar Variável de Ambiente',
  'gpuservice.template.env.invalid':
    'Por favor complete as variáveis de ambiente.',
  'gpuservice.template.env.name': 'Nome',
  'gpuservice.template.env.value': 'Valor',
  'gpuservice.template.card.image': 'Imagem',
  'gpuservice.template.card.mount': 'Montagem',
  'gpuservice.template.card.resources': 'Recursos',
  'gpuservice.template.card.ports': 'Portas',
  'gpuservice.storageType': 'Tipo de Armazenamento',
  'gpuservice.storageType.add': 'Adicionar Tipo de Armazenamento',
  'gpuservice.storageType.edit': 'Editar Tipo de Armazenamento',
  'gpuservice.storageType.filter.name': 'Pesquisar por nome',
  'gpuservice.storageType.kind': 'Tipo',
  'gpuservice.storageType.mountOptions': 'Opções de Montagem',
  'gpuservice.storageType.nfs.server': 'Servidor NFS',
  'gpuservice.storageType.nfs.server.tips':
    'Certifique-se de que o endereço do servidor NFS seja acessível de todos os clusters Kubernetes.',
  'gpuservice.storageType.nfs.share': 'Caminho de Compartilhamento',
  'gpuservice.storageType.nfs.share.tips':
    'Um diretório baseado na organização e nos nomes de armazenamento será automaticamente criado dentro deste caminho de compartilhamento. Se um subdiretório for especificado, o diretório gerado será criado sob esse subdiretório.',
  'gpuservice.storageType.nfs.subDirectory': 'Subdiretório',
  'gpuservice.storageType.nfs.subDirectory.tips':
    'Se vazio, um subdiretório nomeado após o volume persistente será criado. Se definido, um diretório com o nome do volume persistente será criado sob este subdiretório.',
  'gpuservice.storageType.nfs.mountPermissions': 'Permissões de Montagem',
  'gpuservice.storageType.nfs.mountPermissions.tips':
    'Herda as permissões de arquivo do servidor NFS.',
  'gpuservice.storageType.s3.endpoint': 'Endpoint',
  'gpuservice.storageType.s3.endpoint.tips':
    'Certifique-se de que o endpoint S3 seja acessível de todos os clusters Kubernetes.',
  'gpuservice.storageType.s3.endpoint.rule': 'Deve começar com http ou https',
  'gpuservice.storageType.s3.region': 'Região',
  'gpuservice.storageType.s3.bucket': 'Bucket',
  'gpuservice.storageType.s3.bucket.tips':
    'Se vazio, um novo bucket nomeado após o volume persistente será criado. Se definido, um subdiretório com o nome do volume persistente será criado dentro deste bucket.',
  'gpuservice.storageType.s3.bucket.tips1':
    'Um prefixo baseado na organização e nos nomes de armazenamento será automaticamente criado dentro deste bucket.',
  'gpuservice.storageType.s3.bucket.tips2':
    'Por exemplo, se a organização se chama <span class="desc-block">awesome-group</span> e o armazenamento se chama <span class="desc-block">storage-1</span>, o prefixo resultante será <span class="desc-block">awesome-group/storage-1</span>.',
  'gpuservice.storageType.s3.accessKey': 'Access Key',
  'gpuservice.storageType.s3.secretKey': 'Secret Key',
  'gpuservice.storageType.s3.insecure':
    'Ignorar verificação de certificado TLS/SSL',
  'gpuservice.storageType.s3.insecure.tips':
    'Quando habilitado, o certificado do servidor S3 não é validado. Use isto para testes internos ou certificados autoassinados; habilite com cautela em produção.',
  'gpuservice.publicKey': 'Chave Pública SSH',
  'gpuservice.publicKey.add': 'Adicionar Chave Pública SSH',
  'gpuservice.publicKey.edit': 'Editar Chave Pública SSH',
  'gpuservice.publicKey.filter.name': 'Pesquisar por nome',
  'gpuservice.publicKey.label': 'Chave Pública SSH',
  'gpuservice.instance.ssh.enable': 'Habilitar Acesso SSH',
  'gpuservice.instance.ssh.assignKey': 'Atribuir Chave Pública SSH',
  'gpuservice.instance.ssh.addKey': 'Adicionar Chave Pública SSH',
  'gpuservice.publicKey.placeholder':
    'Comece com ssh-rsa ou ssh-ed25519. Uma Chave Pública por linha.\n\nVer Chave Pública:\n- RSA\ncat ~/.ssh/id_rsa.pub\n- Ed25519\ncat ~/.ssh/id_ed25519.pub',
  'gpuservice.instance': 'Instância de GPU',
  'gpuservice.instance.add': 'Adicionar Instância de GPU',
  'gpuservice.instance.edit': 'Editar Instância de GPU',
  'gpuservice.instance.filter.cluster': 'Filtrar por cluster',
  'gpuservice.instance.name': 'Nome da Instância',
  'gpuservice.instance.name.required': 'Por favor insira o nome da instância',
  'gpuservice.instance.section.basic': 'Informações Básicas',
  'gpuservice.instance.section.type': 'Tipo de Instância',
  'gpuservice.instance.section.template': 'Modelo de Instância',
  'gpuservice.instance.types': 'Tipos de Instância',
  'gpuservice.instance.templates': 'Modelos de Instância',
  'gpuservice.instance.section.storage': 'Armazenamento',
  'gpuservice.instance.type.required':
    'Por favor selecione um tipo de instância',
  'gpuservice.instance.gpuCount': 'Contagem de GPU',
  'gpuservice.instance.gpuCount.required': 'Por favor insira a contagem de GPU',
  'gpuservice.instance.gpuCount.max':
    'Por favor selecione no máximo {count} GPU(s)',
  'gpuservice.instance.gpuCount.min':
    'Por favor selecione pelo menos {count} GPU(s)',
  'gpuservice.instance.gpuCount.noAvailable':
    'Nenhum recurso de GPU disponível, por favor escolha outro tipo de instância.',
  'gpuservice.instance.gpuCount.zero':
    'Configuração apenas de CPU para preparação do ambiente.',
  'gpuservice.instance.stock': 'Estoque',
  'gpuservice.instance.sliced': 'Fatiado',
  'gpuservice.instance.memory': 'VRAM',
  'gpuservice.instance.ram': 'RAM',
  'gpuservice.instance.disk': 'Disco',
  'gpuservice.instance.search.type.placeholder': 'Pesquisar por nome',
  'gpuservice.instance.search.template.placeholder':
    'Pesquisar por nome do modelo, imagem ou caminho de montagem',
  'gpuservice.instance.template.image': 'Imagem',
  'gpuservice.instance.template.mount': 'Montagem',
  'gpuservice.instance.connect': 'Conectar',
  'gpuservice.instance.connect.copySshCommand': 'Copiar Comando SSH',
  'gpuservice.instance.event.reason': 'Razão',
  'gpuservice.instance.event.message': 'Mensagem',
  'gpuservice.instance.event.source': 'Fonte',
  'gpuservice.instance.event.count': 'Contagem',
  'gpuservice.instance.event.lastSeen': 'Última Visualização',
  'gpuservice.instance.event.recentHourTip':
    'Apenas eventos da última hora são mostrados',
  'gpuservice.instance.event.tab.instance': 'Eventos da Instância',
  'gpuservice.instance.event.tab.volume': 'Eventos do Volume',
  'gpuservice.instance.recreate.confirm.title': 'Confirmar recriação',
  'gpuservice.instance.recreate.confirm.content':
    'A instância atual será excluída primeiro, depois recriada com a configuração atual.\n <span style="font-size: 13px;font-weight: 700">{name}</span>',
  'gpuservice.storage': 'Armazenamento',
  'gpuservice.storage.add': 'Adicionar Armazenamento',
  'gpuservice.storage.edit': 'Editar Armazenamento',
  'gpuservice.storage.filter.cluster': 'Filtrar por cluster',
  'gpuservice.storage.type': 'Tipo de Armazenamento',
  'gpuservice.storage.type.local': 'Armazenamento Local',
  'gpuservice.storage.type.shared': 'Armazenamento Compartilhado',
  'gpuservice.storage.type.object': 'Armazenamento de Objetos',
  'gpuservice.storage.capacity': 'Capacidade',
  'gpuservice.storage.accessMode': 'Modo de Acesso',
  'gpuservice.storage.persistent': 'Persistente',
  'gpuservice.storage.temporary': 'Efêmero',
  'gpuservice.storage.persistentVolume': 'Persistente',
  'gpuservice.storage.temporary.tips':
    'Os dados são limpos quando a instância para.',
  'gpuservice.storage.persistentVolume.tips':
    'Os dados persistem entre reinicializações e são excluídos apenas quando a instância é terminada. Não pode ser compartilhado com outras instâncias.',
  'gpuservice.storage.persistentVolume.required':
    'Por favor selecione um volume persistente',
  'gpuservice.storage.persistentVolume.capacity': 'Capacidade (GB)',
  'gpuservice.storage.persistentVolume.capacity.required':
    'Por favor insira a capacidade',
  'gpuservice.storage.persistentVolume.releaseWithInstance':
    'Liberar com a instância',
  'gpuservice.storage.tempCapacity': 'Capacidade (GB)',
  'gpuservice.storage.tempCapacity.required':
    'Por favor insira a capacidade de armazenamento temporário',
  'gpuservice.form.rule.name':
    "Letras minúsculas, números e '-'. Comece e termine com uma letra ou número, sem '-' consecutivos, máx 63 caracteres."
};
