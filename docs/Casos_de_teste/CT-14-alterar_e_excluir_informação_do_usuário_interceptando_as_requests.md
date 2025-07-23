# CT-14 Alterar e Excluir informação do usuário interceptando as requests

Descrição: Testar a comunicação do frontend com o backend interceptando as requests e alterando e excluindo os funcionários com PATCH e DELET

Endpoint: https://analista-teste.seatecnologia.com.br/employees/{id}

Passos:
    -Envie PATCH com o playload JSON:
    {"state":
	    {"employee":
		    {"isActive":true,
                "name":"funcionario teste",
                "gender":"masculino",
                "cpf":"12345678901",
                "birthDay":"1998-10-10",
                "rg":"1234567",
                "role":"",
                "usesEpi":false,
                "caNumber":"123"}
}}
    - Verifique a resposta status code 201 Created
    - Envie GET para https://analista-teste.seatecnologia.com.br/employees/{id}
    - Verifique a resposta status code 200 ok
    - Verifique o ID e o Nome do funcionário
    - Envie DELET para https://analista-teste.seatecnologia.com.br/employees/{id}
    - Verifique a resposta status code 200 ok
    - Envie GET para - Envie GET para https://analista-teste.seatecnologia.com.br/employees/{id}
    - Verifique a resposta status code 404 not found

Resultado esperado e obtido: Sucesso, o Sistema persiste, altera e deleta as informações de acordo com as requests feitas com o frontend

Evidência em: evidencias_de_teste\evidencia_sucedidos\CT-14

Risco: Alto
Automação: Sim