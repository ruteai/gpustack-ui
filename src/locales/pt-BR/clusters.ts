export default {
  'clusters.title': 'Cluster',
  'clusters.table.provider': 'Provedor',
  'clusters.table.deployments': 'Implantações',
  'clusters.button.add': 'Adicionar Cluster',
  'clusters.button.addCredential': 'Adicionar Credencial de Nuvem',
  'clusters.button.editCredential': 'Editar Credencial de Nuvem',
  'clusters.filterBy.cluster': 'Filtrar por cluster',
  'clusters.add.cluster': 'Adicionar Cluster {cluster}',
  'clusters.edit.cluster': 'Editar {cluster}',
  'clusters.provider.custom': 'Personalizado',
  'clusters.button.register': 'Registrar Cluster',
  'clusters.button.addNodePool': 'Adicionar Worker Pool',
  'clusters.button.add.credential': 'Adicionar Credencial {provider}',
  'clusters.credential.title': 'Credencial de Nuvem',
  'clusters.credential.token': 'Token de Acesso',
  'clusters.workerpool.region': 'Região',
  'clusters.workerpool.zone': 'Zona',
  'clusters.workerpool.instanceType': 'Tipo de Instância',
  'clusters.workerpool.replicas': 'Réplicas',
  'clusters.workerpool.batchSize': 'Tamanho do Lote',
  'clusters.workerpool.osImage': 'Imagem do SO',
  'clusters.workerpool.volumes': 'Volumes',
  'clusters.workerpool.format': 'Formato',
  'clusters.workerpool.size': 'Tamanho (GiB)',
  'clusters.workerpool.title': 'Worker Pools',
  'clusters.workerpool.cloudOptions': 'Adicionar Opções de Nuvem',
  'clusters.workerpool.volumes.add': 'Adicionar Volume',
  'clusters.create.provider.self': 'Self-Hosted',
  'clusters.create.provider.cloud': 'Provedor de Nuvem',
  'clusters.create.steps.selectProvider': 'Selecionar Provedor',
  'clusters.create.configBasic': 'Configuração Básica',
  'clusters.create.execCommand': 'Executar Comando',
  'clusters.create.supportedGpu': 'GPUs Suportadas',
  'clusters.create.skipfornow': 'Pular por Agora',
  'clusters.create.noImages': 'Nenhuma imagem disponível',
  'clusters.create.noInstanceTypes': 'Nenhum tipo de instância disponível',
  'clusters.create.noRegions': 'Nenhuma região disponível',
  'clusters.workerpool.batchSize.desc':
    'Número de workers criados simultaneamente no Worker pool',
  'clusters.create.addworker.tips':
    'Por favor certifique-se de que os <a href={link} target="_blank">pré-requisitos</a> para {label} estejam atendidos antes de executar o comando a seguir.',
  'clusters.create.addCommand.tips':
    'No Worker que precisa ser adicionado, execute o comando a seguir para juntá-lo ao cluster.',
  'clusters.create.addCommand.k8s.tips':
    'No cluster Kubernetes que precisa ser registrado, execute o comando a seguir para criar os recursos do Kubernetes e registrar o cluster.',
  'clusters.create.register.tips':
    'No cluster Kubernetes que precisa ser adicionado, execute o comando a seguir para juntar seus nós ao cluster.',
  'cluster.create.checkEnv.tips':
    'Use o comando a seguir para verificar se o ambiente está pronto.',
  'cluster.provider.comingsoon': 'Em breve',
  'clusters.addworker.nvidiaNotes-01':
    'Se múltiplos IPs de saída existirem, especifique o que deseja que o worker use. Verifique com <span class="bold-text">hostname -I | xargs -n1</span>.',
  'clusters.addworker.nvidiaNotes-02':
    'Se um diretório de modelo já existir no worker, você pode especificar o caminho para montá-lo.',
  'clusters.addworker.hygonNotes': `Se <span class="bold-text">/opt/hyhal</span> ou <span class="bold-text">/opt/dtk</span> não existirem, crie links simbólicos apontando para os caminhos de instalação correspondentes do Hygon, por exemplo:
  <span class="desc-fill">ln -s /path/to/hyhal /opt/hyhal</span>
  <span class="desc-fill">ln -s /path/to/dtk /opt/dtk</span>.`,
  'clusters.addworker.corexNotes': `Se o diretório <span class="bold-text">/usr/local/corex</span> não existir, crie um link simbólico para o caminho de instalação do SDK Iluvatar:
<span class="bold-text">ln -s /path/to/corex /usr/local/corex</span>.`,
  'clusters.addworker.metaxNotes': `Se o diretório <span class="bold-text">/opt/mxdriver</span> ou <span class="bold-text">/opt/maca</span> não existir, crie um link simbólico para o caminho de instalação do driver e SDK MetaX:
  <span class="desc-fill">ln -s /path/to/mxdriver /opt/mxdriver</span>
  <span class="desc-fill">ln -s /path/to/maca /opt/maca</span>.`,
  'clusters.addworker.cambriconNotes': `Se o diretório <span class="bold-text">/usr/local/neuware</span> não existir, crie um link simbólico para o caminho de instalação da Cambricon:
<span class="bold-text">ln -s /path/to/neuware /usr/local/neuware</span>.`,
  'clusters.addworker.hygonNotes-02':
    'Se a detecção de dispositivo falhar, tente remover <span class="bold-text">--env ROCM_SMI_LIB_PATH=/opt/hyhal/lib</span>.',
  'clusters.addworker.selectCluster': 'Selecionar Cluster',
  'clusters.addworker.selectCluster.tips':
    'Para clusters <span class="bold-text">não-Docker</span>, por favor registre clusters ou gerencie worker pools da página de Clusters.',
  'clusters.addworker.selectGPU': 'Selecionar Fabricante de GPU',
  'clusters.addworker.selectGPU.multiTag': 'Multi-seleção',
  'clusters.addworker.checkEnv': 'Verificar Ambiente',
  'clusters.addworker.specifyArgs': 'Especificar Argumentos',
  'clusters.addworker.runCommand': 'Executar Comando',
  'clusters.addworker.specifyWorkerIP': 'IP do Worker',
  'clusters.addworker.detectWorkerIP': 'Auto-detectar IP do Worker',
  'clusters.addworker.specifyWorkerAddress': 'Endereço Externo do Worker',
  'clusters.addworker.detectWorkerAddress': 'Endereço Externo do Worker',
  'clusters.addworker.detectWorkerAddress.tips':
    'Padrão é o IP do Worker se não especificado.',
  'clusters.addworker.externalIP.tips':
    'Se estiver executando em uma VPC ou rede privada, por favor especifique o endereço externo do Worker acessível pelo GPUStack Server.',
  'clusters.addworker.enterWorkerIP': 'Insira o IP do worker',
  'clusters.addworker.enterWorkerIP.error': 'Por favor insira o IP do worker.',
  'clusters.addworker.enterWorkerAddress':
    'Insira o endereço externo do worker',
  'clusters.addworker.enterWorkerAddress.error':
    'Por favor insira o endereço externo do worker.',
  'clusters.addworker.extraVolume': 'Montagem de Volume Adicional',
  'clusters.addworker.cacheVolume': 'Montagem de Volume de Cache de Modelo',
  'clusters.addworker.cacheVolume.tips':
    'Se desejar personalizar o diretório de cache de modelo, pode especificar o caminho para montá-lo.',
  'clusters.addworker.configSummary': 'Resumo da Configuração',
  'clusters.addworker.gpuVendor': 'Fabricante de GPU',
  'clusters.addworker.workerIP': 'IP do Worker',
  'clusters.addworker.workerExternalIP': 'Endereço Externo do Worker',
  'clusters.addworker.notSpecified': 'Não Especificado',
  'clusters.addworker.autoDetect': 'Auto',
  'clusters.addworker.extraVolume.holder':
    'ex: /data/models (o caminho deve começar com /). Use vírgulas para separar múltiplos caminhos.',
  'clusters.addworker.cacheVolume.holder':
    'ex: /data/cache (o caminho deve começar com /)',
  'clusters.addworker.vendorNotes.title': 'Notas para Dispositivo {vendor}',
  'clusters.button.genToken':
    'Precisa criar um novo token? Clique <a href="{link}" target="_blank">aqui</a>.',
  'clusters.addworker.amdNotes-01': `Se o diretório <span class="bold-text">/opt/rocm</span> não existir, por favor crie um link simbólico apontando para o caminho instalado do ROCm: <span class="bold-text">ln -s /path/to/rocm /opt/rocm</span>.`,
  'clusters.addworker.message.success_single':
    '{count} novo worker foi adicionado ao cluster.',
  'clusters.addworker.message.success_multiple':
    '{count} novos workers foram adicionados ao cluster.',
  'clusters.create.serverUrl': 'URL do Servidor GPUStack',
  'clusters.create.workerConfig': 'Configuração do Worker',
  'clusters.addworker.containerName': 'Nome do Container do Worker',
  'clusters.addworker.containerName.tips':
    'Especifique um nome para o container do worker.',
  'clusters.addworker.dataVolume': 'Volume de Dados do GPUStack',
  'clusters.addworker.dataVolume.tips':
    'Especifique um caminho de armazenamento de dados para o GPUStack.',
  'clusters.table.ip.internal': 'Interno',
  'clusters.table.ip.external': 'Externo',
  'clusters.form.serverUrl.tips':
    'Especifique uma URL de serviço GPUStack acessível externamente se o worker não puder acessar o GPUStack Server diretamente.',
  'clusters.form.setDefault': 'Definir como Padrão',
  'clusters.form.setDefault.tips': 'Padrão para implantação.',
  'clusters.addworker.noClusters':
    'Nenhum cluster Docker disponível encontrado',
  'clusters.create.steps.complete.tips': 'Cluster criado com sucesso!',
  'clusters.create.steps.complete': 'Concluir',
  'clusters.create.steps.configure': 'Configurar',
  'clusters.create.dockerTips1': 'Em seguida, adicione worker a este cluster.',
  'clusters.create.dockerTips2':
    'Você também pode pular esta etapa e adicioná-los depois pela lista de clusters.',
  'clusters.create.k8sTips1':
    'Em seguida, registre o cluster Kubernetes existente.',
  'clusters.create.k8sTips2':
    'Você também pode pular esta etapa e registrá-lo depois pela lista de clusters.',
  'clusters.addworker.theadNotes':
    'Se o diretório <span class="bold-text">/usr/local/PPU_SDK</span> não existir, por favor crie um link simbólico apontando para o caminho instalado do T-Head PPU SDK: <span class="bold-text">ln -s /path/to/PPU_SDK /usr/local/PPU_SDK</span>.',
  'clusters.addworker.theadNotes-02':
    'O T-Head PPU usa a Container Device Interface (CDI) para injeção de dispositivo e requer que o diretório <span class="bold-text">/var/run/cdi</span> esteja disponível para geração de CDI.',
  'clusters.addworker.nvidiaNotes':
    'Os backends de inferência embutidos no GPUStack v2.1 requerem <span class="bold-text">CUDA 12.6+</span>. Por favor certifique-se de que sua versão do driver NVIDIA seja <span class="bold-text">560</span> ou mais recente.',
  'clusters.volume.title': 'Montagens de Volume',
  'clusters.volume.name': 'Nome do Volume',
  'clusters.volume.mountPath': 'Caminho do Container',
  'clusters.volume.mountPath.format': 'O caminho deve começar com /',
  'clusters.volume.readOnly': 'Somente Leitura',
  'clusters.volume.sourceType': 'Tipo de Origem',
  'clusters.volume.sourceType.hostPath': 'Caminho do Host',
  'clusters.volume.sourceType.pvc': 'Persistent Volume Claim (PVC)',
  'clusters.volume.sourceType.configMap': 'ConfigMap',
  'clusters.volume.hostPath.path': 'Caminho do Host',
  'clusters.volume.hostPath.type': 'Tipo de Caminho',
  'clusters.volume.hostPath.type.directory': 'Diretório',
  'clusters.volume.hostPath.type.directoryOrCreate':
    'Diretório (criar se não existir)',
  'clusters.volume.hostPath.type.file': 'Arquivo',
  'clusters.volume.hostPath.type.fileOrCreate':
    'Arquivo (criar se não existir)',
  'clusters.volume.hostPath.type.socket': 'Socket',
  'clusters.volume.hostPath.type.charDevice': 'Dispositivo de Caractere',
  'clusters.volume.hostPath.type.blockDevice': 'Dispositivo de Bloco',
  'clusters.volume.pvc.claimName': 'Nome do PVC',
  'clusters.volume.pvc.readOnly': 'Somente Leitura',
  'clusters.volume.configMap.name': 'Nome do ConfigMap',
  'clusters.volume.configMap.optional': 'Opcional',
  'clusters.volume.add': 'Adicionar Montagem de Volume',
  'clusters.systemDefaultContainerRegistry.title':
    'Registro de Container Padrão',
  'clusters.systemDefaultContainerRegistry.tip':
    'Registro padrão usado para resolver imagens do GPUStack para este cluster. Usa o padrão do servidor quando não definido.',
  'clusters.k8sOptions.title': 'Opções de Implantação K8s',
  'clusters.imageCredentials.title': 'Credenciais de Imagem',
  'clusters.imageCredentials.add': 'Adicionar Credencial',
  'clusters.imageCredentials.registry': 'Registro',
  'clusters.imageCredentials.username': 'Usuário',
  'clusters.imageCredentials.password': 'Senha',
  'clusters.nodeSelector.title': 'Seletor de Nó',
  'clusters.nodeSelector.tip':
    'Pod nodeSelector aplicado a cada worker DaemonSet — apenas nós cujos labels correspondam são elegíveis para executar o worker.',
  'clusters.operatorImage.title': 'Imagem do Operador',
  'clusters.operatorImage.tip':
    'Substituição para a imagem do container GPUStack Operator. Deixe vazio para usar o padrão do servidor.',
  'clusters.namespace.title': 'Namespace',
  'clusters.namespace.tip':
    'Namespace do Kubernetes no qual os manifests do cluster são renderizados. Deixe vazio para usar gpustack-system.',
  'clusters.gpuInstances.title': 'Instâncias de GPU',
  'clusters.gpuInstances.tip':
    'Habilitar suporte a instância de GPU para este cluster.',
  'clusters.gpuInstances.staticAddress': 'Endereço de Acesso Estático',
  'clusters.gpuInstances.staticAddress.tip':
    'Endereço estático que o operador usa para acessar instâncias de GPU neste cluster (ex: um LoadBalancer VIP). Opcional.'
};
