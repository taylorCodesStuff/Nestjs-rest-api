import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('/items')
export class ItemsController {
    @Get()
    findAll(): String {
        return 'Get all Items';
    }

    @Get('/:id')
    findOne(@Param('id') id): String {
        return `Item id: ${id}`;
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): String {
        return `Name: ${createItemDto.name},` + 
        ` Desc: ${createItemDto.description},` + ` qty: ${createItemDto.qty}`;
    }

    @Delete(':id')
    delete(@Param('id') id): String {
        return `Deleted Item with id: ${id}`;
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateItemDto: CreateItemDto): String {
        return `Updated item qty with id: ${id} to ${updateItemDto.qty}`
    }


}
