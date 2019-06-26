var db = null;

$(document).ready(function(){
    setTimeout(carregar, 4000);
});

function carregar() {
    $('#splash').hide()
  
}


document.addEventListener("deviceready", function(){
db = window.sqlitePlugin.openDatabase({name: "veiculos.db"});
db.transaction(function(tx) {
tx.executeSql("CREATE TABLE IF NOT EXISTS tbveiculos (id integer primary key, marca text, modelo text, ano text, cor text, quilometragem text, valor text,)");
veiculos_consulta();
}, function(err){
alert("Um erro ocorreu durante a inicialização do app");
});
}, false);



function add(){
    var marca = document.getElementById("cadmarca").value;
    var modelo = document.getElementById("cadmodelo").value;
    var ano = document.getElementById("cadano").value;
    var cor = document.getElementById("cadcor").value;
    var quilometragem = document.getElementById("cadquilometragem").value;
    var valor = document.getElementById("cadvalor").value;

    if(marca == "") {
    alert("Qual a marca do carro");
    return;
    }
    if(modelo == ""){
    alert("Qual o modelo do veiculo");
    return;
    }
    if(ano == ""){
        alert("Qual o ano do veiculo");
        return;
}    
if(cor == ""){
    alert("Qual a cor do veiculo");
    return;
}
if(quilometragem == ""){
    alert("Qual a quilometragem do veiculo");
    return;
}
if(valor == ""){
    alert("Qual o valor da tabela fipi do veiculo");
    return;
}
db.transaction(function(tx) {
    tx.executeSql("INSERT INTO tbveiculos (marca, modelo, ano, cor, quilometragem, valor) VALUES (?,?,?,?,?,?)", [marca, modelo, ano, cor, quilometragem, valor], function(tx,res){
    alert("Dados cadastrados com sucesso!");    
    });
    },
    function(err){
    alert("Um erro ocorreu durante a inicialização do app");
    });
    

}



    function  veiculos_consulta(){
        db.transaction(veiculos_consulta_database, erroDB);
        }
        function veculos_consulta_database(tx){
        tx.executeSql('SELECT * FROM tbveiculos', [], veiculos_consulta_dados, erroDB);
        }
        function veiculos_consulta_dados(tx, results){
        var len = results.rows.length;
        alert("Tabela Veiculos: "+len+" linhas encontradas");
        for (var i=0; i<len; i++){
        $("#veiculos-listagem").append("<tr>"+
        "<td>"+results.rows.item(i).marca+"</td>"+
        "<td>"+results.rows.item(i).modelo+"</td>"+ 
        "<td>"+results.rows.item(i).ano+"</td>"+
        "<td>"+results.rows.item(i).cor+"</td>"+
        "<td>"+results.rows.item(i).quilometragem+"</td>"+
        "<td>"+results.rows.item(i).valor+"</td>"+
        "</tr>"
        );
        }
        }
        function erroDB(tx, err) {
        alert("Erro ao processar o SQL: "+err);
}


 function veiculos_consulta_dados(tx, results){
            $("#veiculos-listagem").empty();
            var len = results.rows.length;
            alert("Tabela veiculos: "+len+" linhas encontradas");
            for (var i=0; i<len; i++){
            $("#veiculos-listagem").append("<tr>"+
            "<td><h4>"+results.rows.item(i).marca+"</h4></td>"+
            "<td><h5>"+results.rows.item(i).modelo+"</h5></td>"+
            "<td><h5>"+results.rows.item(i).ano+"</h5></td>"+
            "<td><h5>"+results.rows.item(i).cor+"</h5></td>"+
            "<td><h5>"+results.rows.item(i).quilometragem+"</h5></td>"+
            "<td><h5>"+results.rows.item(i).valor+"</h5></td>"+
            "<td><input type='button' class='btn btn-lg btn-danger' value='X' onclick='veiculos_delete("+results.rows.item(i).id +")'><input type='button' class='btn btn-lg btn-warning' value='E' onclick='veiculos_edicao_abrir_tela("+results.rows.item(i).id+")'></td>"+ 
            "</tr>"
            );
            }
}

 function veiculos_delete(veiculos_id){
                var id_delete = document.querySelector("#veiculos_id_delete").value = veiculos_id;
                db.transaction(function(tx) {
                tx.executeSql('DELETE FROM tbveiculos WHERE id ='+ id_delete +'');
                veiculos_consulta();
                }, function(err){
                alert(err.message);
                alert("Um erro ocorreu durante a inicialização do app");
                });
}
            
function veiculos_edicao_fechar_tela(){
                        $("#edicao").hide();
                        $("#tbveiculos").show();
                    }
                    $(document).ready(function(){ 
                        $('#edicao').hide();
                        });
function veiculos_edicao_abrir_tela(veiculos_id){
                            $("#tbveiculos").hide();
                            $("#edicao").show();
                            var id_update = document.querySelector("#veiculos_id_update").value = veiculos_id;
                            db.transaction(function(tx) {
                            tx.executeSql("SELECT * FROM tbveiculos WHERE id = ?", [id_update], function(tx, resultado){
                            var marca = resultado.rows.item(0).marca;
                            var modelo = resultado.rows.item(0).modelo;
                            var ano = resultado.rows.item(0).ano;
                            var cor = resultado.rows.item(0).cor;
                            var quilometragem = resultado.rows.item(0).quilometragem;
                            var valor = resultado.rows.item(0).valor;
                            document.getElementById("editmarca").value = marca;
                            document.getElementById("editmodelo").value = modelo;
                            document.getElementById("editano").value = ano;
                            document.getElementById("editcor").value = cor;
                            document.getElementById("editquilometragem").value = quilometragem;
                            document.getElementById("editvalor").value = valor;
                            alert("Codigo: "+id_update+" Nome: "+nome);
                            });
                            }, function(err){
                            alert(err.message);
                            alert("Um erro ocorreu durante a inicialização do app");
                            });
}

function veiculos_atualizar(){
                         var veiculos_id_novo = document.getElementById("veiculos_id_update").value;
                     var veiculos_marca_novo = document.getElementById("editmarca").value;
                    var veiculos_modelo_novo = document.getElementById("editmodelo").value;
                var veiculos_ano_novo = document.getElementById("editano").value;
             var veiculos_cor_novo = document.getElementById("editcor").value;
         var veiculos_quilometragem_novo = document.getElementById("editquilometragem").value;
            var veiculos_valor_novo = document.getElementById("editvalor").value;
             db.transaction(function(tx) {
                 tx.executeSql('UPDATE tbveiculos SET nome = "'+veiculos_marca_novo+'", marca = "'+veiculos_modelo_novo+'", modelo = "'+veiculos_ano_novo+'", ano= "'+veiculos_cor_novo+'", cor ="'+veiculos_quilometragem_novo+'", quilometragem ="'+veiculos_valor_novo+'", valor =   WHERE id = "'+veiculos_id_novo+'" ');
                    alert("Dados alterados com sucesso");
                     veiculos_edicao_fechar_tela();
                      veiculos_consulta();
                         }, function(err){
                             alert(err.message);
                                alert("Um erro ocorreu durante a inicialização do app");
                                });
  }
                                
 function combustivel(){
var n1 = document.querySelector("#etanol").value;
 var n2 = document.querySelector("#gasolina").value;
    var res = parseFloat(n1) / parseFloat(n2);
        
        if(res<0.7){
            document.querySelector("#res").value ="Etanol " +res.toFixed(2);}
        
            else{
                document.querySelector("#res").value ="Gasolina " +res.toFixed(2);
            }
            };                   
                        
        