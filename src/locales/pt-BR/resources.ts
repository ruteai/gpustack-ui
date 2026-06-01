export default {
  'resources.title': 'Recursos',
  'resources.nodes': 'Workers',
  'resources.worker': 'Worker',
  'resources.container': 'Container',
  'resources.button.create': 'Adicionar Worker',
  'resources.button.edit': 'Editar Worker',
  'resources.button.edittags': 'Editar Labels',
  'resources.button.update': 'Atualizar Labels',
  'resources.table.labels': 'Labels',
  'resources.table.hostname': 'Hostname',
  'resources.table.key.tips': 'A mesma chave existe.',
  'resources.form.label': 'Label',
  'resources.form.advanced': 'Avançado',
  'resources.form.enablePartialOffload': 'Permitir Offload para CPU',
  'resources.form.placementStrategy': 'Estratégia de Posicionamento',
  'resources.form.workerSelector': 'Seletor de Worker',
  'resources.form.enableDistributedInferenceAcrossWorkers':
    'Permitir Inferência Distribuída entre Workers',
  'resources.form.spread.tips':
    'Faz com que os recursos de todo o cluster sejam relativamente uniformemente distribuídos entre todos os workers. Pode produzir mais fragmentação de recursos em um único worker.',
  'resources.form.binpack.tips':
    'Prioriza a utilização geral dos recursos do cluster, reduzindo a fragmentação de recursos em GPUs/Workers.',
  'resources.form.workerSelector.description':
    'O sistema seleciona o Worker mais adequado para implantar instâncias de modelo com base nos labels predefinidos.',
  'resources.table.ip': 'IP',
  'resources.table.cpu': 'CPU',
  'resources.table.memory': 'RAM',
  'resources.table.gpu': 'GPU',
  'resources.table.disk': 'Armazenamento',
  'resources.table.vram': 'VRAM',
  'resources.table.index': 'Índice',
  'resources.table.workername': 'Nome do Worker',
  'resources.table.vendor': 'Fabricante',
  'resources.table.temperature': 'Temperatura',
  'resources.table.core': 'Núcleos',
  'resources.table.utilization': 'Utilização',
  'resources.table.gpuutilization': 'Utilização da GPU',
  'resources.table.vramutilization': 'Utilização da VRAM',
  'resources.table.total': 'Total',
  'resources.table.used': 'Usado',
  'resources.table.allocated': 'Alocado',
  'resources.table.wokers': 'workers',
  'resources.worker.linuxormaxos': 'Linux ou macOS',
  'resources.table.unified': 'Memória Unificada',
  'resources.worker.add.step1':
    'Obter Token <span class="note-text">(Execute no servidor)</span>',
  'resources.worker.add.step2': 'Registrar Worker',
  'resources.worker.add.step2.tips': '(Execute no worker a ser adicionado.)',
  'resources.worker.add.step3':
    'Após o sucesso, atualize a lista de workers para visualizar o novo worker.',
  'resources.worker.container.supported': 'Não suporta macOS ou Windows.',
  'resources.worker.current.version': 'A versão atual é {version}.',
  'resources.worker.driver.install':
    'Instale <a href="https://docs.gpustack.ai/latest/installation/installation-requirements/" target="_blank">drivers e bibliotecas necessários</a> antes da instalação do GPUStack.',
  'resources.worker.select.command':
    'Selecione um label para gerar o comando e copie-o usando o botão de cópia.',
  'resources.worker.script.install': 'Instalação por Script',
  'resources.worker.container.install':
    'Instalação por Container (Apenas Linux)',
  'resources.worker.cann.tips': `Defina <span class="bold-text">--device /dev/davinci{index}</span> de acordo com o índice NPU necessário. Por exemplo, para montar NPU0 e NPU1, adicione <span class="bold-text">--device /dev/davinci0 --device /dev/davinci1</span>.`,
  'resources.modelfiles.form.path': 'Caminho de Armazenamento',
  'resources.modelfiles.modelfile': 'Arquivos de Modelo',
  'resources.modelfiles.download': 'Adicionar Arquivo de Modelo',
  'resources.modelfiles.size': 'Tamanho',
  'resources.modelfiles.selecttarget': 'Selecionar Destino',
  'resources.modelfiles.form.localdir': 'Diretório Local',
  'resources.modelfiles.form.localdir.tips':
    'O diretório de armazenamento padrão é <span class="desc-block">/var/lib/gpustack/cache</span>, ou o diretório especificado por <span class="desc-block">--cache-dir</span> (preferencial) ou <span class="desc-block">--data-dir</span>.',
  'resources.modelfiles.retry.download': 'Tentar Download Novamente',
  'resources.modelfiles.storagePath.holder':
    'Aguardando o download ser concluído...',
  'resources.filter.worker': 'Filtrar por worker',
  'resources.filter.source': 'Filtrar por origem',
  'resources.filter.status': 'Filtrar por status',
  'resources.modelfiles.delete.tips': 'Também excluir o arquivo do disco',
  'resources.modelfiles.copy.tips': 'Copiar Caminho Completo',
  'resources.filter.path': 'Filtrar por caminho',
  'resources.register.worker.step1':
    'Clique no menu <span class="bold-text">Copiar Token</span> no aplicativo.',
  'resources.register.worker.step2':
    'Clique no menu <span class="bold-text">Configuração Rápida</span> no aplicativo.',
  'resources.register.worker.step3':
    'Clique na aba <span class="bold-text">Geral</span>.',
  'resources.register.worker.step4':
    'Selecione <span class="bold-text">Worker</span> como a função de serviço.',
  'resources.register.worker.step5':
    'Insira a <span class="bold-text">URL do Servidor</span>: {url}.',
  'resources.register.worker.step6':
    'Cole o <span class="bold-text">Token</span>.',
  'resources.register.worker.step7':
    'Clique em <span class="bold-text">Reiniciar</span> para aplicar as configurações.',
  'resources.register.install.title': 'Instalar GPUStack em {os}',
  'resources.register.download':
    'Baixe e instale o <a href={url} target="_blank">instalador</a>. Suportado apenas: {versions}.',
  'resource.register.maos.support': 'Apple Silicon (série M), macOS 14+',
  'resource.register.windows.support': 'win 10, win 11',
  'resources.model.instance': 'Instância do Modelo',
  'resources.worker.download.privatekey': 'Baixar Chave Privada',
  'resources.modelfiles.form.exsting': 'Baixado',
  'resources.modelfiles.form.added': 'Adicionado',
  'resources.modelfiles.form.isLora': 'É LoRA',
  'resources.worker.maintenance.title': 'Manutenção do Sistema',
  'resources.worker.maintenance.enable': 'Entrar em Modo de Manutenção',
  'resources.worker.maintenance.disable': 'Sair do Modo de Manutenção',
  'resources.worker.maintenance.remark': 'Observação',
  'resources.worker.maintenance.remark.rules':
    'Por favor insira observações de manutenção',
  'resources.worker.maintenance.tips':
    'Ao entrar no modo de manutenção, o nó irá parar de agendar novas tarefas de implantação de modelo. As instâncias em execução não serão afetadas.',
  'resources.worker.noCluster.tips':
    'Nenhum cluster disponível. Por favor crie um cluster antes de adicionar um nó.',
  'resources.metrics.details': 'Monitoramento',
  'resoureces.worker.upgrade.tips':
    'Por favor atualize para corresponder à versão do GPUStack Server.',
  'resources.worker.version': 'Versão do Worker: {version}',
  'resources.server.version': 'Versão do Server: {version}',
  'resources.worker.currentVersion': 'Versão Atual: {version}',
  'resources.worker.targetVersion': 'Versão de Destino: {version}',
  'resources.driver.version': 'Versão do Driver: {version}'
};
