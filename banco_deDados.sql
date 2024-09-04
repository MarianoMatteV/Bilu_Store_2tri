create database Bilu_StoreOFC;
use Bilu_StoreOFC;

create table usuarios(
	usuario enum("Cliente", "Administrador") default("Cliente"),
    id_usuario int not null primary key auto_increment unique,
    cpf varchar(45) unique,
    nome varchar(45),
    email varchar(45) unique,
    senha varchar(45)
);

create table produtos(
	id_produto int primary key not null auto_increment unique,
	nome_produto varchar(40),
	preco_produto float,
	quantidade_produto int,
	descricao_produto varchar(1000) not null
);

create table carrinho(
	id_carrinho int primary key auto_increment,
	valor_total float,
	qtd_produto int,
	id_usuario int,
	id_produto int,
	foreign key (id_produto) references produtos(ID_produto),
	foreign key (id_usuario) references usuarios(id_usuario)
);

select * from usuarios;
select * from produtos;
select * from carrinho