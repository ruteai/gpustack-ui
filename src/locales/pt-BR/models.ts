export default {
  'models.button.deploy': 'Implantar Modelo',
  'models.title': 'Modelos',
  'models.title.edit': 'Editar Modelo',
  'models.title.duplicate': 'Clonar Modelo',
  'models.table.models': 'modelos',
  'models.table.name': 'Nome do Modelo',
  'models.form.source': 'Fonte',
  'models.form.repoid': 'ID do Repositório',
  'models.form.repoid.desc': 'Apenas formato .gguf é suportado',
  'models.form.filename': 'Nome do Arquivo',
  'models.form.replicas': 'Réplicas',
  'models.form.selector': 'Seletor',
  'models.form.env': 'Variáveis de Ambiente',
  'models.form.configurations': 'Configurações',
  'models.form.s3address': 'Endereço S3',
  'models.form.partialoffload.tips': `Quando o offload para CPU está habilitado, o GPUStack alocará memória da CPU se os recursos da GPU forem insuficientes. Você deve configurar corretamente o backend de inferência para usar inferência híbrida CPU+GPU ou apenas CPU.`,
  'models.form.distribution.tips': `Permite fazer offload de parte das camadas do modelo para workers remotos únicos ou múltiplos quando os recursos de um worker forem insuficientes.`,
  'models.openinplayground': 'Abrir no Playground',
  'models.instances': 'instâncias',
  'models.table.replicas.edit': 'Editar Réplicas',
  'model.form.ollama.model': 'Modelo Ollama',
  'model.form.ollamaholder': 'Por favor selecione ou insira o nome do modelo',
  'model.deploy.sort': 'Ordenar',
  'model.deploy.search.placeholder':
    'Digite <kbd>/</kbd> para pesquisar modelos',
  'model.form.ollamatips':
    'Dica: Os seguintes são os modelos Ollama pré-configurados no GPUStack. Por favor selecione o modelo desejado, ou digite diretamente o modelo que deseja implantar na caixa de entrada 【{name}】 à direita.',
  'models.sort.name': 'Nome',
  'models.sort.size': 'Tamanho',
  'models.sort.likes': 'Curtidas',
  'models.sort.trending': 'Em alta',
  'models.sort.downloads': 'Downloads',
  'models.sort.updated': 'Atualizado',
  'models.search.result': '{count} resultados',
  'models.data.card': 'Card do Modelo',
  'models.available.files': 'Arquivos Disponíveis',
  'models.viewin.hf': 'Ver no Hugging Face',
  'models.viewin.modelscope': 'Ver no ModelScope',
  'models.architecture': 'Arquitetura',
  'models.search.noresult': 'Nenhum modelo relacionado encontrado',
  'models.search.nofiles': 'Nenhum arquivo disponível',
  'models.search.networkerror': 'Exceção de conexão de rede!',
  'models.search.hfvisit': 'Por favor certifique-se de que pode acessar',
  'models.search.unsupport':
    'Este modelo não é suportado e pode estar inutilizável após a implantação.',
  'models.form.scheduletype': 'Modo de Agendamento',
  'models.form.categories': 'Categoria do Modelo',
  'models.form.scheduletype.auto': 'Auto',
  'models.form.scheduletype.manual': 'Manual',
  'models.form.scheduletype.gpu': 'Especificar GPU',
  'models.form.scheduletype.gpuType': 'Especificar Tipo de GPU',
  'models.form.scheduletype.auto.tips':
    'Implanta automaticamente instâncias de modelo em GPUs apropriadas com base nas condições de recursos atuais.',
  'models.form.scheduletype.manual.tips':
    'Permite especificar manualmente as GPUs para implantar as instâncias de modelo.',
  'models.form.manual.schedule': 'Agendamento Manual',
  'models.table.gpuindex': 'Índice da GPU',
  'models.table.backend': 'Backends',
  'models.table.acrossworker': 'Distribuído entre Workers',
  'models.table.cpuoffload': 'Offload para CPU',
  'models.table.layers': 'Camadas',
  'models.form.backend': 'Backend',
  'models.form.backend_parameters': 'Parâmetros do Backend',
  'models.instance.params.configured': 'Configurado pelo Usuário',
  'models.instance.params.autoInjected': 'Parâmetros Injetados Automaticamente',
  'models.search.gguf.tips':
    'Modelos GGUF usam llama-box (suporta Linux, macOS e Windows).',
  'models.search.vllm.tips':
    'Modelos não-GGUF usam vox-box para áudio e vLLM (apenas Linux x86) para outros.',
  'models.search.voxbox.tips':
    'Para implantar um modelo de áudio, desmarque a caixa de seleção.',
  'models.form.ollamalink':
    'Encontre mais na <a href="https://www.ollama.com/library" target="_blank">Biblioteca Ollama</a>.',
  'models.form.backend_parameters.llamabox.placeholder':
    'ex: --ctx-size=8192 (use = ou espaço para separar nome e valor)',
  'models.form.backend_parameters.vllm.placeholder':
    'ex: --max-model-len=8192 (use = ou espaço para separar nome e valor)',
  'models.form.backend_parameters.sglang.placeholder':
    'ex: --context-length=8192 (use = ou espaço para separar nome e valor)',
  'models.form.backend_parameters.vllm.tips':
    'Para mais detalhes sobre parâmetros de {backend}, veja <a href={link} target="_blank">aqui</a>.',
  'models.logs.pagination.prev': 'Anteriores {lines} Linhas',
  'models.logs.pagination.next': 'Próximas {lines} Linhas',
  'models.logs.pagination.last': 'Última Página',
  'models.logs.pagination.first': 'Primeira Página',
  'models.form.localPath': 'Caminho Local',
  'models.form.filePath': 'Caminho do Modelo',
  'models.form.backendVersion': 'Versão do Backend',
  'models.form.backendVersion.tips':
    'Para usar a versão desejada de {backend}{version}, o sistema criará automaticamente um ambiente virtual no ambiente online para instalar a versão correspondente. Após uma atualização do GPUStack, a versão do backend permanecerá fixa. {link}',
  'models.form.gpuselector': 'Seletor de GPU',
  'models.form.backend.llamabox':
    'Para modelos no formato GGUF, suporta Linux, macOS e Windows.',
  'models.form.backend.vllm':
    'Suporte embutido para dispositivos NVIDIA, AMD, Ascend, Hygon, Moore Threads, Iluvatar, MetaX, T-Head PPU.',
  'models.form.backend.voxbox': 'Suporta apenas GPUs NVIDIA e CPUs.',
  'models.form.backend.mindie': 'Suporta apenas NPUs Ascend.',
  'models.form.backend.sglang':
    'Suporte embutido para dispositivos NVIDIA, AMD, Ascend, Moore Threads, MetaX, T-Head PPU.',
  'models.form.search.gguftips':
    'Se estiver usando macOS ou Windows como worker, marque GGUF (desmarque para modelos de áudio).',
  'models.form.button.addlabel': 'Adicionar Label',
  'models.filter.category': 'Filtrar por categoria',
  'models.list.more.logs': 'Ver Mais',
  'models.catalog.release.date': 'Data de Lançamento',
  'models.localpath.gguf.tips.title': 'Modelo no formato GGUF',
  'models.localpat.safe.tips.title': 'Modelo no formato Safetensors',
  'models.localpath.shared.tips.title': 'Modelo no formato GGUF fragmentado',
  'models.localpath.gguf.tips':
    ' Especifique o arquivo do modelo, ex: /data/models/model.gguf.',
  'models.localpath.safe.tips':
    'Especifique o diretório do modelo que contém arquivos .safetensors e config.json, ex: /data/models/model.',
  'models.localpath.chunks.tips': `Especifique o primeiro arquivo fragmentado do modelo, ex: /data/models/model-00001-of-00004.gguf.`,
  'models.form.replicas.tips':
    'Múltiplas réplicas habilitam balanceamento de carga para requisições de inferência { api }.',
  'models.table.list.empty': 'Nenhum Modelo ainda!',
  'models.table.list.getStart':
    '<span style="margin-right: 5px;font-size: 13px;">Comece com</span> <span style="font-size: 14px;font-weight: 700">DeepSeek-R1-Distill-Qwen-1.5B</span>',
  'models.table.llamaAcrossworker': 'Llama-box entre Workers',
  'models.table.vllmAcrossworker': 'vLLM entre Workers',
  'models.form.releases': 'Lançamentos',
  'models.form.moreparameters': 'Descrição do Parâmetro',
  'models.table.vram.allocated': 'VRAM Alocada',
  'models.form.backend.warning':
    'O backend selecionado não suporta modelos GGUF. Por favor adicione um backend com suporte a GGUF em Backends de Inferência.',
  'models.form.backend.warning.gguf':
    'Por favor certifique-se de que o backend personalizado selecionado suporta modelos GGUF.',
  'models.form.ollama.warning':
    'Implante o backend do modelo Ollama usando llama-box.',
  'models.form.backend.warning.llamabox':
    'Para usar o backend llama-box, especifique o caminho completo do arquivo do modelo (ex: <span style="font-weight: 700">/data/models/model.gguf</span>). Para modelos fragmentados, forneça o caminho para o primeiro fragmento (ex: <span style="font-weight: 700">/data/models/model-00001-of-00004.gguf</span>).',
  'models.form.keyvalue.paste':
    'Cole múltiplas linhas de texto, com cada linha contendo um par chave-valor. A chave e o valor são separados por um sinal de =, e diferentes pares são separados por caracteres de nova linha.',
  'models.form.files': 'arquivos',
  'models.table.status': 'Status',
  'models.form.submit.anyway': 'Enviar Mesmo Assim',
  'models.form.evaluating': 'Avaliando Compatibilidade do Modelo',
  'models.form.incompatible': 'Incompatibilidade Detectada',
  'models.form.restart.onerror': 'Auto-Reiniciar em Erro',
  'models.form.restart.onerror.tips':
    'Quando ocorrer um erro, tentará reiniciar automaticamente.',
  'models.form.check.params': 'Verificando configuração...',
  'models.form.check.passed': 'Verificação de Compatibilidade Aprovada',
  'models.form.check.claims':
    'O modelo consumirá aproximadamente {vram} de VRAM e {ram} de RAM.',
  'models.form.check.claims2':
    'O modelo consumirá aproximadamente {vram} de VRAM.',
  'models.form.check.claims3':
    'O modelo consumirá aproximadamente {ram} de RAM.',
  'models.form.update.tips':
    'As alterações só serão aplicadas após excluir e recriar a instância.',
  'models.table.download.progress': 'Progresso',
  'models.table.button.apiAccessInfo': 'Informações de Acesso à API',
  'models.table.button.apiAccessInfo.tips': `Para integrar este modelo com aplicações de terceiros, use os seguintes detalhes: URL de acesso, nome do modelo e chave de API. Estas credenciais são necessárias para garantir a conexão e uso adequado do serviço de modelo.`,
  'models.table.apiAccessInfo.endpoint': 'URL de Acesso',
  'models.table.apiAccessInfo.modelName': 'Nome do Modelo',
  'models.table.apiAccessInfo.apikey': 'Chave de API',
  'models.table.apiAccessInfo.openaiCompatible': 'Compatível com OpenAI',
  'models.table.apiAccessInfo.anthropicCompatible': 'Compatível com Anthropic',
  'models.table.apiAccessInfo.jinaCompatible': 'Compatível com Jina',
  'models.table.apiAccessInfo.gotoCreate': 'Ir para Criar',
  'models.search.parts': '{n} partes',
  'models.search.evaluate.error': 'Ocorreu um erro durante a avaliação: ',
  'models.ollama.deprecated.title': 'Aviso de Depreciação',
  'models.ollama.deprecated.current':
    '<span class="bold-text">Versão Atual (v0.6.1): </span>Modelos Ollama estão atualmente disponíveis para uso.',
  'models.ollama.deprecated.upcoming':
    '<span class="bold-text">Próxima Versão (v0.7.0): </span>A fonte de modelos Ollama será removida da UI.',
  'models.ollama.deprecated.following':
    '<span class="bold-text">Após a atualização v0.7.0,</span> todos os modelos previamente implantados continuarão funcionando conforme esperado.',
  'models.ollama.deprecated.issue':
    'Veja a issue relacionada: <a href="https://github.com/gpustack/gpustack/issues/1979" target="_blank">#1979 no GitHub</a>.',
  'models.ollama.deprecated.notice': `A fonte de modelos Ollama foi depreciada a partir da v0.6.1. Para mais informações, veja a <a href="https://github.com/gpustack/gpustack/issues/1979" target="_blank">issue relacionada no GitHub</a>.`,
  'models.backend.mindie.310p':
    'Ascend 310P suporta apenas FP16, então você precisa definir --dtype=float16.',
  'models.form.gpuCount': 'GPUs por Réplica',
  'models.form.gpuType': 'Tipo de GPU',
  'models.form.optimizeLongPrompt': 'Otimizar Prompt Longo',
  'models.form.enableSpeculativeDecoding':
    'Habilitar Decodificação Especulativa',
  'models.form.check.clusterUnavailable': 'O cluster atual está indisponível',
  'models.form.check.otherClustersAvailable':
    'Clusters disponíveis: {clusters}. Por favor mude de cluster.',
  'models.button.accessSettings': 'Configurações de Acesso',
  'models.table.accessScope': 'Escopo de Acesso',
  'models.table.accessScope.all': 'Todos os usuários',
  'models.table.userSelection': 'Seleção de Usuário',
  'models.button.accessSettings.tips':
    'As alterações nas configurações de acesso entram em vigor após um minuto.',
  'models.table.userSelection.tips':
    'Usuários administradores podem acessar todos os modelos por padrão.',
  'models.table.filterByName': 'Filtrar por nome de usuário',
  'models.table.admin': 'Administrador',
  'models.table.noselected': 'Nenhum usuário selecionado',
  'models.table.users.all': 'Todos os Usuários',
  'models.table.users.selected': 'Usuários Selecionados',
  'models.table.nouserFound': 'Nenhum usuário encontrado',
  'models.form.performance': 'Performance',
  'models.form.gpus.notfound': 'Nenhuma GPU encontrada',
  'models.form.extendedkvcache': 'Habilitar KV Cache Estendido',
  'models.form.chunkSize': 'Tamanho dos Chunks de Cache',
  'models.form.maxCPUSize': 'Tamanho Máximo de Cache na CPU (GiB)',
  'models.form.remoteURL': 'URL de Armazenamento Remoto',
  'models.form.remoteURL.tips':
    'Consulte a <a href="https://docs.lmcache.ai/api_reference/configurations.html" target="_blank">documentação de configuração</a> para detalhes.',
  'models.form.runCommandPlaceholder':
    'ex: vllm serve Qwen/Qwen2.5-1.5B-Instruct',
  'models.accessSettings.public': 'Público',
  'models.accessSettings.authed': 'Autenticado',
  'models.accessSettings.allowedUsers': 'Usuários permitidos',
  'models.accessSettings.public.tips':
    'Quando definido como público, qualquer pessoa pode acessar este modelo sem autenticação, o que pode levar a riscos de exposição de dados.',
  'models.table.button.deploy': 'Implantar Agora',
  'models.form.backendVersion.holder': 'Insira ou selecione uma versão',
  'models.form.gpusperreplica': 'GPUs por Réplica',
  'models.form.gpusAllocationType': 'Tipo de Alocação de GPU',
  'models.form.gpusAllocationType.auto': 'Auto',
  'models.form.gpusAllocationType.custom': 'Personalizado',
  'models.form.gpusAllocationType.auto.tips':
    'O sistema calcula automaticamente a contagem de GPUs por réplica, usando potências de dois por padrão e limitado pelas GPUs selecionadas.',
  'models.form.gpusAllocationType.custom.tips':
    'Você pode especificar o número exato de GPUs por réplica.',
  'models.mymodels.status.inactive': 'Parado',
  'models.mymodels.status.degrade': 'Não Pronto',
  'models.mymodels.status.active': 'Pronto',
  'models.form.kvCache.tips':
    'KV cache estendido e decodificação especulativa estão disponíveis apenas com backends embutidos (vLLM / SGLang). Mude o backend para habilitá-los.',
  'models.form.kvCache.tips2':
    'Suportado apenas ao usar backends de inferência embutidos (vLLM ou SGLang).',
  'models.form.scheduling': 'Agendamento',
  'models.form.ramRatio': 'Razão RAM para VRAM',
  'models.form.ramSize': 'Tamanho Máximo de RAM (GiB)',
  'models.form.ramRatio.tips':
    'Razão da RAM do sistema para a VRAM da GPU usada para cache KV. Por exemplo, 2.0 significa que o cache na RAM pode ser duas vezes maior que a VRAM da GPU.',
  'models.form.ramSize.tips': `Tamanho máximo do cache KV armazenado na memória do sistema (GiB). Se definido, este valor substitui "{content}".`,
  'models.form.chunkSize.tips': 'Número de tokens por chunk de cache KV.',
  'models.form.mode': 'Modo',
  'models.form.algorithm': 'Algoritmo',
  'models.form.draftModel': 'Modelo de Rascunho',
  'models.form.numDraftTokens': 'Número de Tokens de Rascunho',
  'models.form.ngramMinMatchLength':
    'Comprimento Mínimo de Correspondência N-gram',
  'models.form.ngramMaxMatchLength':
    'Comprimento Máximo de Correspondência N-gram',
  'models.form.mode.throughput': 'Throughput',
  'models.form.mode.latency': 'Latência',
  'models.form.mode.baseline': 'Padrão',
  'models.form.mode.throughput.tips':
    'Otimizado para alto throughput sob alta concorrência de requisições.',
  'models.form.mode.latency.tips':
    'Otimizado para baixa latência sob baixa concorrência de requisições.',
  'models.form.mode.baseline.tips':
    'Executa com precisão total (original) e prioriza compatibilidade.',
  'models.form.draftModel.placeholder':
    'Por favor selecione ou insira um modelo de rascunho',
  'models.form.draftModel.tips':
    'Você pode inserir um caminho local (ex: /path/to/model) ou selecionar um modelo do Hugging Face ou ModelScope (ex: Tengyunw/qwen3_8b_eagle3). O sistema fará a correspondência automaticamente com base na fonte do modelo principal.',
  'models.form.quantization': 'Quantização',
  'models.form.backend.custom': 'Definido pelo usuário',
  'models.form.rules.name':
    'Até 63 caracteres; apenas letras, números, pontos (.), underscores (_) e hífens (-); deve começar e terminar com caractere alfanumérico.',
  'models.catalog.button.explore': 'Explorar Mais Modelos',
  'models.catalog.precision': 'Precisão',
  'models.form.gpuPerReplica.tips': 'Insira um número personalizado',
  'models.form.generic_proxy': 'Habilitar Proxy Genérico',
  'models.form.enableModelRoute': 'Habilitar Rota de Modelo',
  'models.form.enableModelRoute.tips': 'Habilitar Rota de Modelo',
  'models.form.generic_proxy.tips':
    'Após habilitar o proxy genérico, você pode acessar caminhos URI que não seguem o padrão da API OpenAI.',
  'models.form.generic_proxy.button': 'Proxy Genérico',
  'models.accessControlModal.includeusers': 'Incluir Usuários',
  'models.table.genericProxy':
    'Use o seguinte prefixo de caminho e defina o nome do modelo no cabeçalho de requisição <span class="bold-text">X-GPUStack-Model</span> ou no campo model do corpo da requisição. Todas as requisições sob este prefixo de caminho serão encaminhadas para o backend de inferência.',
  'models.form.backendVersion.deprecated': 'Depreciado',
  'models.accessSettings.public.desc':
    'Acessível a qualquer pessoa sem autenticação.',
  'models.accessSettings.authed.tips':
    'Acessível a todos os usuários autenticados da plataforma.',
  'models.accessSettings.allowedUsers.tips':
    'Apenas usuários designados podem acessar o modelo.',
  'models.form.backendVersions.tips': `Para usar mais versões, vá para a página {link} e edite o backend para adicionar versões.`,
  'models.catalog.nogpus.tips':
    'Nenhuma GPU compatível está disponível no cluster selecionado para este modelo.',
  'models.form.modelfile.notfound': `O caminho do arquivo de modelo que você especificou não existe no servidor GPUStack. Recomenda-se colocar o arquivo de modelo no mesmo caminho tanto no servidor GPUStack quanto nos workers GPUStack. Isso ajuda o GPUStack a tomar melhores decisões.`,
  'models.form.readyWorkers': 'workers prontos',
  'models.form.maxContextLength': 'Comprimento Máximo de Contexto',
  'models.form.backend.helperText':
    'Ainda não habilitado. Será habilitado após a implantação. ',
  'models.table.instance.benchmark': 'Executar Benchmark',
  'models.table.modelView': 'Lista de Modelos',
  'models.table.instanceView': 'Lista de Instâncias',
  'models.table.category': 'Categoria',
  'models.instance.currentRun': 'Execução Atual',
  'models.instance.previousRun': 'Execução Anterior',
  'models.instance.startHistory': 'Histórico de Execuções',
  'models.instance.startHistory.tips':
    'Mostra logs da execução anterior ao último reinício acionado por erro.',
  'models.form.lora.label': 'Adaptador LoRA',
  'models.form.lora.add': 'Adicionar Adaptador LoRA',
  'models.form.lora.select': 'Selecionar LoRA',
  'models.form.lora.name': 'Nome do LoRA',
  'models.form.lora.rule.empty': 'A entrada não pode estar vazia',
  'models.form.lora.rule.duplicate': 'O nome do LoRA não pode ser duplicado'
};
